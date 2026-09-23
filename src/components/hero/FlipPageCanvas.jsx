import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Full-Viewport 3D Deformable Magazine Page Mesh Component (100x100 Subdivided Mesh)
function FlippingPageMesh({ frontTexture, progress }) {
  const { viewport } = useThree();
  const frontMeshRef = useRef();
  const backMeshRef = useRef();

  const width = viewport.width;
  const height = viewport.height;
  const SEGMENTS_X = 100;
  const SEGMENTS_Y = 100;

  // Create plane geometries translated so left spine edge is at x = 0
  const { frontGeometry, backGeometry, originalPositions } = useMemo(() => {
    const geoFront = new THREE.PlaneGeometry(width, height, SEGMENTS_X, SEGMENTS_Y);
    geoFront.translate(width / 2, 0, 0); // Origin x = 0 is left spine edge

    const geoBack = geoFront.clone();
    const positions = geoFront.attributes.position.clone();

    return { frontGeometry: geoFront, backGeometry: geoBack, originalPositions: positions };
  }, [width, height]);

  // Physical 3D page curl deformation frame loop (+Z forward curvature towards viewer)
  useFrame(() => {
    if (!frontMeshRef.current) return;

    const u = THREE.MathUtils.clamp(progress.current, 0, 1);
    const angle = -u * Math.PI; // 0 to -180 degrees spin around left spine (x = 0)
    const curlIntensity = Math.sin(u * Math.PI) * 1.25; // Peak curvature mid-flip (u = 0.5)

    const frontPos = frontMeshRef.current.geometry.attributes.position;
    const origAttr = originalPositions;

    for (let i = 0; i < frontPos.count; i++) {
      const origX = origAttr.getX(i);
      const origY = origAttr.getY(i);
      const normX = origX / width; // 0 at left spine, 1 at right free edge
      const normY = origY / height; // -0.5 to 0.5

      // Natural parabolic 3D curvature Z displacement (curling forward towards +Z camera)
      const bendZ = curlIntensity * Math.sin(normX * Math.PI) * normX * 1.35;
      
      // Diagonal corner lift (top/bottom right corners curl gracefully)
      const cornerZ = curlIntensity * (normX * normX) * (Math.abs(normY) * 0.35);
      
      const zLocal = bendZ + cornerZ;

      // Rotate vertex position around left spine edge axis (x = 0) with forward Z displacement
      const rotatedX = origX * Math.cos(angle) + zLocal * Math.sin(angle);
      const rotatedZ = -origX * Math.sin(angle) + zLocal * Math.cos(angle);

      frontPos.setXYZ(i, rotatedX, origY, rotatedZ);
    }

    frontPos.needsUpdate = true;
    frontMeshRef.current.geometry.computeVertexNormals();

    if (backMeshRef.current) {
      const backPos = backMeshRef.current.geometry.attributes.position;
      backPos.copy(frontPos);
      backPos.needsUpdate = true;
      backMeshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <group position={[-width / 2, 0, 0]}>
      {/* Front Face: Pure Bright White Emissive Hero Page */}
      <mesh ref={frontMeshRef} geometry={frontGeometry} position={[0, 0, 0.002]}>
        <meshStandardMaterial
          map={frontTexture}
          emissive="#ffffff"
          emissiveMap={frontTexture}
          emissiveIntensity={0.85}
          roughness={0.9}
          metalness={0.0}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Back Face: Premium Pure White Paper Back Surface */}
      <mesh ref={backMeshRef} geometry={backGeometry} position={[0, 0, -0.002]}>
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#ffffff"
          emissiveIntensity={0.85}
          roughness={0.9}
          metalness={0.0}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Base Stationary Page Underneath (Layer 1: Next Page continuously pre-rendered full-screen with 100% PURE WHITE color fidelity)
function BasePageMesh({ texture }) {
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;

  return (
    <mesh position={[0, 0, -0.05]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

// Dynamic Flip Shadow cast on base page underneath during curl
function PageShadow({ progress }) {
  const { viewport } = useThree();
  const width = viewport.width;
  const height = viewport.height;
  const shadowRef = useRef();

  useFrame(() => {
    if (!shadowRef.current) return;
    const u = THREE.MathUtils.clamp(progress.current, 0, 1);
    const opacity = Math.sin(u * Math.PI) * 0.25; // Gentle soft shadow during turn only
    shadowRef.current.material.opacity = opacity;
  });

  return (
    <mesh ref={shadowRef} position={[0, 0, -0.02]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        color="#0f172a"
        transparent
        opacity={0}
      />
    </mesh>
  );
}

export default function FlipPageCanvas({ currentTexture, nextTexture, flipProgress }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        {/* Head-On Studio Light Setup for 100% Pure White Rendering */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 10]} intensity={1.2} />
        <directionalLight position={[5, 8, 7]} intensity={0.6} />

        {/* Full-Viewport 3D Hero Composition */}
        <group position={[0, 0, 0]}>
          {/* Layer 1: Next Page pre-rendered underneath full-screen */}
          {nextTexture && <BasePageMesh texture={nextTexture} />}

          {/* Dynamic Page Shadow */}
          <PageShadow progress={flipProgress} />

          {/* Layer 2: Current Turning Page (100x100 Subdivided Full-Viewport Mesh) */}
          {currentTexture && (
            <FlippingPageMesh
              frontTexture={currentTexture}
              progress={flipProgress}
            />
          )}
        </group>
      </Canvas>
    </div>
  );
}


