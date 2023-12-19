import { useLayoutEffect, useMemo, useRef } from "react";
import RigidBody from "../Physics";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function NovaCelestia() {
  const meshRef = useRef<any>();
  const currentAttributes = useMemo(() => {
    return {
      name: "Nova Celestia",
      mass: 100000000,
      size: 2056,
      detail: 128,
      velocity: new Vector3(10, 0, 0),
      position: new Vector3(0, 0, 0),
      rotation: 0.05,
      ref: meshRef,
    };
  }, []);
  useLayoutEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.computeBoundingSphere();
      RigidBody.addBody(currentAttributes);
    }
  }, [currentAttributes]);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * currentAttributes.rotation;
    }
  });

  return (
    <mesh position={currentAttributes.position} ref={meshRef}>
      <sphereGeometry
        args={[
          currentAttributes.size,
          currentAttributes.detail,
          currentAttributes.detail,
        ]}
      />
      <meshStandardMaterial
        emissive="orange"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}