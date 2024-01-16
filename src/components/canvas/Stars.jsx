import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
  const ref = useRef();

  // Generate random sphere positions with filtering
  const [sphere] = useState(() => {
    const generatedSphere = generateRandomSpherePoints(5000, 1.2);

    // Check for NaN values and filter them out
    const filteredSphere = Array.from(generatedSphere).filter(
      (value) => !isNaN(value),
    );

    return new Float32Array(filteredSphere);
  });

  // Ensure the 'sphere' array is not empty before rendering
  if (sphere.length === 0) {
    console.error("Error: 'sphere' array is empty.");
    return null; // or return an empty fragment, depending on your use case
  }

  // Update rotation in the animation loop
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

// Custom function to generate random points within a sphere
const generateRandomSpherePoints = (numPoints, radius) => {
  const points = new Float32Array(numPoints * 3);

  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * 2 * Math.PI;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }

  return points;
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
