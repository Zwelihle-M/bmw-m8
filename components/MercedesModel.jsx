import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const MercedesModel = () => {

    function Model(props) {
        const { scene } = useGLTF("/Mercedes.glb");
        return <primitive object={scene} {...props} />;
      }
  return (
    <Canvas
    dpr={[1, 2]}
    camera={{ fov: 45 }}
    style={{ position: "absolute" }}
  >
    <OrbitControls enableZoom={false} enablePan={false} />
    <ambientLight intensity={1} />
    <hemisphereLight intensity={0.1} />
    <pointLight
      position={[10, 20, 10]}
      intensity={1}
      distance={50}
      color="#ffffff"
    />
    <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <Model scale={1.5} />
  </Canvas>
  )
}

export default MercedesModel