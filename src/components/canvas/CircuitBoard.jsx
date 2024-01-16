import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const CircuitBoard = (props) => {
  const [circuitTexture] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={18} position={[0, 0, 0]} />
      <directionalLight position={[0, 0, 0]} intensity={5} />
      <mesh castShadow receiveShadow scale={4}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial
          color="#151030"
          roughness={0.8}
          metalness={0.2}
          flatShading
        />
        <Decal
          position={[0, 0, 0.06]}
          rotation={[0, 0, 0]}
          scale={[0.8, 0.8, 0.8]}
          map={circuitTexture}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const CircuitBoardCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CircuitBoard imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CircuitBoardCanvas;
