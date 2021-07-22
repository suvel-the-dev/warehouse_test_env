import React from "react";
import { Canvas } from "@react-three/fiber";

const ForwardCanvas = ({ children }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 40] }}
      frameloop="always"
      style={{ width: "85vw", height: "80vh" }}
    >
      {children}
    </Canvas>
  );
};

export default ForwardCanvas;
