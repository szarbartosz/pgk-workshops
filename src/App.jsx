import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Lights } from "./components/Lights";
import { Lamp } from "./components/Lamp";
import { Hospital } from "./components/Hospital";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [30, 30, 30] }}>
      {/* <Environment files="assets/pictures/winter.hdr" ground={{ scale: 100 }} /> */}
      <Lights />
      <Lamp position={[0, 10, 0]} scale={4} />
      <Hospital position={[0, 0, 0]} scale={0.08} />
      <OrbitControls />
      {/* <Stats /> */}
      {/* <axesHelper /> */}
    </Canvas>
  );
}
