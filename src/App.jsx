import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Hospital } from "./components/Hospital";
import { Lights } from "./components/Lights";

export default function App() {
  return (
    <Canvas camera={{ position: [300, 300, 300] }}>
      <Lights />
      {/* <Room /> */}
      {/* <Bedroom /> */}
      <Hospital />
      <ambientLight intensity={0.2} />
      <pointLight intensity={0.2} />
      <OrbitControls />
      {/* <Stats /> */}
      {/* <axesHelper /> */}
    </Canvas>
  );
}
