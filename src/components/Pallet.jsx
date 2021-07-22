import React from "react";
import { palletObject, scale } from "../constant";
import texture_img from "../asset/texture/box_texture_3.jpg";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Detailed } from "@react-three/drei";

const palletDimension = palletObject.dim;

const Pallet = ({ position, ...props }) => {
  const texture = useLoader(THREE.TextureLoader, texture_img);

  return (
    <Detailed distances={[0, 35]} {...props}>
      <mesh
        receiveShadow
        castShadow
        position={position}
        scale={[
          palletDimension.width * scale,
          palletDimension.height * scale,
          palletDimension.depth * scale,
        ]}
        {...props}
      >
        <boxGeometry />
        <meshStandardMaterial map={texture} attach="material" />
      </mesh>
      <mesh
        position={position}
        scale={[
          palletDimension.width * scale,
          palletDimension.height * scale,
          palletDimension.depth * scale,
        ]}
        {...props}
      >
        <boxGeometry />
        <meshStandardMaterial color={"#aa8575"} />
      </mesh>
    </Detailed>
  );
};

export default Pallet;
