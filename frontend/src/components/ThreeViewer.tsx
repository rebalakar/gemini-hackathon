import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ReconstructionProfile } from '../types';

interface ThreeViewerProps {
  profile: ReconstructionProfile;
  halfSection?: boolean;
}

export const ThreeViewer: React.FC<ThreeViewerProps> = ({ profile, halfSection = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.003);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const latheMeshRef = useRef<THREE.Mesh | null>(null);
  const wireframeMeshRef = useRef<THREE.LineSegments | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1F2421');
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 150, 280);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffecd2, 1.2);
    dirLight1.position.set(100, 200, 150);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xb0c4de, 0.6);
    dirLight2.position.set(-100, 50, -100);
    scene.add(dirLight2);

    // 3. Ground Grid
    const grid = new THREE.GridHelper(300, 20, 0x4A4F4C, 0x2D312E);
    grid.position.y = 0;
    scene.add(grid);

    // 4. Manual Orbit Dragging
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let spherical = { radius: 300, theta: Math.PI / 4, phi: Math.PI / 3 };

    const updateCameraPos = () => {
      camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.position.y = spherical.radius * Math.cos(spherical.phi);
      camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      camera.lookAt(0, profile.height_mm / 2, 0);
    };
    updateCameraPos();

    const domEl = renderer.domElement;
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      spherical.theta -= dx * 0.008;
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi - dy * 0.008));
      prevMouse = { x: e.clientX, y: e.clientY };
      updateCameraPos();
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      spherical.radius = Math.max(80, Math.min(600, spherical.radius + e.deltaY * 0.3));
      updateCameraPos();
    };

    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });

    // 5. Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isDragging && latheMeshRef.current && rotationSpeed > 0) {
        latheMeshRef.current.rotation.y += rotationSpeed;
        if (wireframeMeshRef.current) {
          wireframeMeshRef.current.rotation.y = latheMeshRef.current.rotation.y;
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Update geometry whenever profile points change
  useEffect(() => {
    if (!sceneRef.current) return;

    // Remove old meshes
    if (latheMeshRef.current) {
      sceneRef.current.remove(latheMeshRef.current);
      latheMeshRef.current.geometry.dispose();
      latheMeshRef.current = null;
    }
    if (wireframeMeshRef.current) {
      sceneRef.current.remove(wireframeMeshRef.current);
      wireframeMeshRef.current.geometry.dispose();
      wireframeMeshRef.current = null;
    }

    const points = profile.points;
    if (!points || points.length < 2) return;

    // Build complete cross-section points (outer wall from base to rim, inner wall from rim back to base)
    const wall_t = profile.wall_thickness_mm || 5.0;
    const lathePoints: THREE.Vector2[] = [];

    // Outer surface (base -> rim)
    for (const [r, h] of points) {
      lathePoints.push(new THREE.Vector2(Math.max(0.1, r), h));
    }

    // Inner surface (rim -> base)
    for (let i = points.length - 1; i >= 0; i--) {
      const [r, h] = points[i];
      const r_inner = Math.max(0.1, r - wall_t);
      lathePoints.push(new THREE.Vector2(r_inner, h));
    }
    // Close base
    lathePoints.push(new THREE.Vector2(0, points[0][1]));

    const phiLength = halfSection ? Math.PI : Math.PI * 2;
    const segments = 48;
    const latheGeo = new THREE.LatheGeometry(lathePoints, segments, 0, phiLength);

    // Terracotta pottery ceramic material
    const mat = new THREE.MeshStandardMaterial({
      color: 0xC85A32,
      roughness: 0.75,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.92,
    });

    const mesh = new THREE.Mesh(latheGeo, mat);
    sceneRef.current.add(mesh);
    latheMeshRef.current = mesh;

    // Translucent technical wireframe overlay
    if (wireframe) {
      const wireGeo = new THREE.WireframeGeometry(latheGeo);
      const wireMat = new THREE.LineBasicMaterial({ color: 0xF4A261, transparent: true, opacity: 0.4 });
      const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
      sceneRef.current.add(wireMesh);
      wireframeMeshRef.current = wireMesh;
    }
  }, [profile, halfSection, wireframe]);

  return (
    <div className="relative w-full h-full min-h-[460px] rounded-xl overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />

      {/* Floating 3D Controls */}
      <div className="absolute top-3 right-3 flex items-center space-x-2 bg-charcoal-900/80 border border-charcoal-700 px-3 py-1.5 rounded-lg text-xs text-white backdrop-blur-xs font-mono shadow-md">
        <label className="flex items-center space-x-1 cursor-pointer">
          <input
            type="checkbox"
            checked={wireframe}
            onChange={(e) => setWireframe(e.target.checked)}
            className="rounded text-terracotta-500"
          />
          <span className="text-[11px]">Wireframe</span>
        </label>
        <div className="w-px h-3.5 bg-charcoal-700" />
        <button
          onClick={() => setRotationSpeed((s) => (s > 0 ? 0 : 0.004))}
          className="text-[11px] text-terracotta-400 hover:text-white"
        >
          {rotationSpeed > 0 ? 'Pause Spin' : 'Auto-Spin'}
        </button>
      </div>

      {/* Dimensions Readout Overlay */}
      <div className="absolute bottom-3 left-3 bg-charcoal-950/80 border border-charcoal-700 text-xs font-mono text-charcoal-300 px-3 py-2 rounded-lg backdrop-blur-xs space-y-0.5">
        <div className="text-terracotta-400 font-bold">REVOLVED 3D HYPOTHESIS</div>
        <div>Rim Ø: {profile.rim_diameter_mm.toFixed(1)} mm</div>
        <div>Height: {profile.height_mm.toFixed(1)} mm</div>
        <div>Thickness: {profile.wall_thickness_mm.toFixed(1)} mm</div>
        <div className="text-[10px] text-charcoal-500 italic mt-1">Rotational symmetry assumption</div>
      </div>
    </div>
  );
};
