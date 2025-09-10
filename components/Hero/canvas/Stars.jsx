import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";



// Custom function to generate random points within a sphere
const generateRandomPointsInSphere = (numPoints, radius) => {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    let x, y, z, mag;
    do {
      x = Math.random() * 2 - 1; // Random value between -1 and 1
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      mag = x * x + y * y + z * z; // Magnitude of the vector
    } while (mag > 1); // Ensure point is within unit sphere

    points[i * 3] = x * radius; // Scale to desired radius
    points[i * 3 + 1] = y * radius;
    points[i * 3 + 2] = z * radius;
  }
  return points;
};

const Stars = (props) => {
  const ref = useRef();
  const sphere = generateRandomPointsInSphere(5000, 1.2); // Generate 5000 points with radius 1.2
useFrame((state,delta)=>{
  ref.current.rotation.x -= delta /10;
  ref.current.rotation.y -= delta /15;
})
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="stars">
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
