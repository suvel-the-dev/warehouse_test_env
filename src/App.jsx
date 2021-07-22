import React, { Suspense } from "react";
import "./App.css";
import ForwardCanvas from "./components/ForwardCanvas";
import Pallet from "./components/Pallet";
import { scale } from "./constant";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const positions = [...Array(800)].map(() => ({
  position: [
    40 - Math.random() * 80,
    40 - Math.random() * 80,
    40 - Math.random() * 80,
  ],
  rotation: [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ],
}));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ForwardCanvas>
          <ambientLight intensity={0.5} />
          {positions.map((prop, i) => {
            return <Pallet key={i} {...prop} />;
          })}
          <OrbitControls />
          <pointLight position={[0, 0, 0]} intensity={0.5} />
          <spotLight intensity={2.5} position={[50, 50, 50]} castShadow />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          <color attach="background" args={["#f10000"]} />
        </ForwardCanvas>
      </Suspense>
    </div>
  );
}

export default App;

function Box(props) {
  return (
    <mesh {...props} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}
