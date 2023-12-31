// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 lowpoly_medical_room.glb
Author: SantyFrow (https://sketchfab.com/santyfrow)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lowpoly-medical-room-616dbedad00e4ff9982d336035d6987a
Title: Lowpoly Medical Room
*/

import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Hospital(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "assets/models/hospital.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="084f101912e0482c9ea0298f86dd1179fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cylinder"
                  position={[-21.038, 17.266, 63.519]}
                  rotation={[-Math.PI / 2, 0, -0.664]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder_palette_0"
                    geometry={nodes.Cylinder_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder001"
                  position={[-21.038, 31.823, 63.519]}
                  rotation={[-Math.PI / 2, 0, -0.664]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder001_palette_0"
                    geometry={nodes.Cylinder001_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder007"
                  position={[-21.038, 56.206, 63.519]}
                  rotation={[-Math.PI / 2, 0, -0.678]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder007_palette_0"
                    geometry={nodes.Cylinder007_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder008"
                  position={[-25.994, 46.321, 69.858]}
                  rotation={[-2.084, 0.367, -0.566]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder008_palette_0"
                    geometry={nodes.Cylinder008_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Plane002"
                  position={[173.287, 42.461, -106.738]}
                  rotation={[-Math.PI / 2, 0, -1.493]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Plane002_palette_0"
                    geometry={nodes.Plane002_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Plane003"
                  position={[173.287, 69.289, -71.233]}
                  rotation={[-Math.PI / 2, 0, -0.028]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Plane003_palette_0"
                    geometry={nodes.Plane003_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Plane004"
                  position={[173.287, 42.568, -76.766]}
                  rotation={[-Math.PI / 2, 0, 1.552]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Plane004_palette_0"
                    geometry={nodes.Plane004_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube055"
                  position={[177.134, 14.124, -93.436]}
                  rotation={[-Math.PI / 2, 0, -0.318]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube055_palette_0"
                    geometry={nodes.Cube055_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube034"
                  position={[173.852, 10.465, -86.797]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube034_palette_0"
                    geometry={nodes.Cube034_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube035"
                  position={[173.852, 10.465, -44.301]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube035_palette_0"
                    geometry={nodes.Cube035_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube036"
                  position={[173.852, 9.503, -45.527]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube036_palette_0"
                    geometry={nodes.Cube036_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube037"
                  position={[161.316, 3.253, -53.607]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube037_palette_0"
                    geometry={nodes.Cube037_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube058"
                  position={[30.806, 126.852, 71.961]}
                  rotation={[0.632, 1.238, -2.699]}
                  scale={100}
                />
                <group
                  name="Cylinder031"
                  position={[166.412, 70.226, -108.866]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={145.052}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder031_palette_0"
                    geometry={nodes.Cylinder031_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube031"
                  position={[-97.38, 254.628, -144.101]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube031_palette_0"
                    geometry={nodes.Cube031_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube033"
                  position={[-21.407, 266.679, -144.101]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube033_palette_0"
                    geometry={nodes.Cube033_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Plane"
                  position={[-20.448, 139.712, -143.861]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Plane_palette_0"
                    geometry={nodes.Plane_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube024"
                  position={[-53.943, 19.934, -46.645]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube024_palette_0"
                    geometry={nodes.Cube024_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube023"
                  position={[16.092, 4.754, -17.174]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube023_palette_0"
                    geometry={nodes.Cube023_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube025"
                  position={[-53.943, 66.715, -47.105]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube025_palette_0"
                    geometry={nodes.Cube025_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube026"
                  position={[26.203, 72.957, -47.105]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube026_palette_0"
                    geometry={nodes.Cube026_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube027"
                  position={[-37.473, 72.957, -47.105]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube027_palette_0"
                    geometry={nodes.Cube027_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube028"
                  position={[-130.226, 92.074, -47.105]}
                  rotation={[-Math.PI / 2, 0.642, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube028_palette_0"
                    geometry={nodes.Cube028_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube029"
                  position={[-137.935, 93.696, -47.105]}
                  rotation={[Math.PI / 2, 0.941, Math.PI]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube029_palette_0"
                    geometry={nodes.Cube029_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube030"
                  position={[-149.419, 80.625, -47.105]}
                  rotation={[-Math.PI / 2, 0.642, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube030_palette_0"
                    geometry={nodes.Cube030_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder026"
                  position={[-128.632, 11.391, 15.566]}
                  rotation={[-Math.PI / 2, 0, -0.994]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder026_palette_0"
                    geometry={nodes.Cylinder026_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Circle"
                  position={[-128.605, 183.847, 15.552]}
                  rotation={[-Math.PI / 2, 0, 1.376]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Circle_palette_0"
                    geometry={nodes.Circle_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Circle001"
                  position={[-128.605, 142.546, 15.552]}
                  rotation={[-Math.PI / 2, 0, 0.076]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Circle001_palette_0"
                    geometry={nodes.Circle001_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube052"
                  position={[-107.311, 128.456, 22.378]}
                  rotation={[-Math.PI / 2, 0, 1.255]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube052_palette_0"
                    geometry={nodes.Cube052_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder027"
                  position={[-115.784, 181.688, -2.844]}
                  rotation={[-Math.PI / 2, 0, 0.985]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder027_palette_0"
                    geometry={nodes.Cylinder027_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Vert"
                  position={[-107.311, 112.233, 22.378]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Vert_palette_0"
                    geometry={nodes.Vert_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube019"
                  position={[-181.227, 211.286, -47.028]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube019_palette_0"
                    geometry={nodes.Cube019_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube021"
                  position={[-122.457, 232.928, -47.133]}
                  rotation={[-Math.PI / 2, 0.574, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube021_palette_0"
                    geometry={nodes.Cube021_palette_0.geometry}
                    material={materials.palette}
                  />
                  <mesh
                    receiveShadow
                    name="Cube021_Monitors_0"
                    geometry={nodes.Cube021_Monitors_0.geometry}
                    material={materials.Monitors}
                  />
                </group>
                <group
                  name="Cube022"
                  position={[-125.108, 234.642, -47.133]}
                  rotation={[-Math.PI / 2, 0.574, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube022_palette_0"
                    geometry={nodes.Cube022_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube006"
                  position={[-130.628, 14.676, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube006_palette_0"
                    geometry={nodes.Cube006_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube007"
                  position={[-130.628, 39.095, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube007_palette_0"
                    geometry={nodes.Cube007_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder010"
                  position={[-130.628, 71.314, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder010_palette_0"
                    geometry={nodes.Cylinder010_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube008"
                  position={[-130.628, 84.55, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube008_palette_0"
                    geometry={nodes.Cube008_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Plane001"
                  position={[-116.731, 84.55, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Plane001_palette_0"
                    geometry={nodes.Plane001_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder012"
                  position={[-138.227, 103.019, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0.889]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder012_palette_0"
                    geometry={nodes.Cylinder012_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder015"
                  position={[-161.491, 123.445, 107.259]}
                  rotation={[Math.PI / 2, 0, 2.104]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder015_palette_0"
                    geometry={nodes.Cylinder015_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder013"
                  position={[-161.491, 123.57, 107.259]}
                  rotation={[-Math.PI / 2, 0, 0.889]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder013_palette_0"
                    geometry={nodes.Cylinder013_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="App_Monitor"
                  position={[-136.951, 145.37, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="App_Monitor_palette_0"
                    geometry={nodes.App_Monitor_palette_0.geometry}
                    material={materials.palette}
                  />
                  <mesh
                    receiveShadow
                    name="App_Monitor_Monitors_0"
                    geometry={nodes.App_Monitor_Monitors_0.geometry}
                    material={materials.Monitors}
                  />
                </group>
                <group
                  name="Cylinder014"
                  position={[-129.691, 95.865, 96.262]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder014_palette_0"
                    geometry={nodes.Cylinder014_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder017"
                  position={[-123.246, 87.035, 96.933]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder017_palette_0"
                    geometry={nodes.Cylinder017_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder018"
                  position={[-116.138, 87.035, 89.006]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder018_palette_0"
                    geometry={nodes.Cylinder018_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder019"
                  position={[-114.933, 87.035, 78.704]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder019_palette_0"
                    geometry={nodes.Cylinder019_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube014"
                  position={[-121.442, 86.366, 78.614]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube014_palette_0"
                    geometry={nodes.Cube014_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube015"
                  position={[-120.195, 86.761, 88.593]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube015_palette_0"
                    geometry={nodes.Cube015_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube016"
                  position={[-130.696, 98.938, 96.279]}
                  rotation={[-Math.PI / 2, 1.44, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube016_palette_0"
                    geometry={nodes.Cube016_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube017"
                  position={[-111.811, 4.228, 104.303]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube017_palette_0"
                    geometry={nodes.Cube017_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube018"
                  position={[-104.824, 31.152, 96.347]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cube018_palette_0"
                    geometry={nodes.Cube018_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Vert002"
                  position={[-156.311, 25.133, 61.098]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Vert002_palette_0"
                    geometry={nodes.Vert002_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder028"
                  position={[-178.111, 25.411, 148.481]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder028_palette_0"
                    geometry={nodes.Cylinder028_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cylinder030"
                  position={[-140.513, 45.879, 107.283]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="Cylinder030_palette_0"
                    geometry={nodes.Cylinder030_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="frame"
                  position={[-176.265, 129.222, 150.904]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="frame_palette_0"
                    geometry={nodes.frame_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="shells"
                  position={[-176.719, 107.575, 150.904]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="shells_palette_0"
                    geometry={nodes.shells_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="bottle3"
                  position={[-176.323, 112.3, 140.989]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="bottle3_palette_0"
                    geometry={nodes.bottle3_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="bottle1"
                  position={[-173.98, 153.991, 158.527]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="bottle1_palette_0"
                    geometry={nodes.bottle1_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="tablets1"
                  position={[-174.466, 108.977, 157.357]}
                  rotation={[-Math.PI / 2, 0, -0.916]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="tablets1_palette_0"
                    geometry={nodes.tablets1_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="bottle2"
                  position={[-176.458, 132.904, 146.625]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="bottle2_palette_0"
                    geometry={nodes.bottle2_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="glass"
                  position={[-176.458, 132.919, 158.44]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="glass_palette_0"
                    geometry={nodes.glass_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="tablets2"
                  position={[-176.118, 91.108, 142.3]}
                  rotation={[-Math.PI / 2, 0, 0.572]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="tablets2_palette_0"
                    geometry={nodes.tablets2_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="tablets3"
                  position={[-176.118, 91.699, 142.3]}
                  rotation={[-1.617, 0.062, -0.299]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="tablets3_palette_0"
                    geometry={nodes.tablets3_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="bottle4"
                  position={[-170.376, 93.266, 164.926]}
                  rotation={[-3.092, 1.046, -0.043]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="bottle4_palette_0"
                    geometry={nodes.bottle4_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="clockBase"
                  position={[-181.279, 222.431, 141.241]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="clockBase_palette_0"
                    geometry={nodes.clockBase_palette_0.geometry}
                    material={materials.palette}
                  />
                  <mesh
                    receiveShadow
                    name="clockBase_Monitors_0"
                    geometry={nodes.clockBase_Monitors_0.geometry}
                    material={materials.Monitors}
                  />
                </group>
                <group
                  name="minuteHand"
                  position={[-180.668, 222.431, 141.241]}
                  rotation={[-2.289, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="minuteHand_palette_0"
                    geometry={nodes.minuteHand_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="hourHand"
                  position={[-181.023, 222.431, 141.241]}
                  rotation={[1.446, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="hourHand_palette_0"
                    geometry={nodes.hourHand_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="clockmiddlescrew"
                  position={[-180.577, 222.431, 141.241]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="clockmiddlescrew_palette_0"
                    geometry={nodes.clockmiddlescrew_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="walls"
                  position={[-200, 100, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="walls_palette_0"
                    geometry={nodes.walls_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group name="floor" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    receiveShadow
                    name="floor_palette_0"
                    geometry={nodes.floor_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="floorTile"
                  position={[0, -0.126, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="floorTile_palette_0"
                    geometry={nodes.floorTile_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="lowerWall"
                  position={[-0.108, 24.428, -193.666]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="lowerWall_palette_0"
                    geometry={nodes.lowerWall_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="socket"
                  position={[-177.709, 25.411, 148.481]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="socket_palette_0"
                    geometry={nodes.socket_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="socket2"
                  position={[-177.709, 25.411, 165.137]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    receiveShadow
                    name="socket2_palette_0"
                    geometry={nodes.socket2_palette_0.geometry}
                    material={materials.palette}
                  />
                </group>
                <group
                  name="Cube046"
                  position={[112.021, 0, 60.592]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[112.021, 0, 60.592]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_158">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_160"
                      position={[30.806, 126.852, 71.961]}
                      rotation={[0.632, 1.238, -2.699]}
                      scale={100}
                    />
                    <group
                      name="Object_163"
                      position={[112.021, 0, 60.592]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_207"
                      position={[112.021, 0, 60.592]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_161"
                      geometry={nodes.Object_161.geometry}
                      material={materials.palette}
                      skeleton={nodes.Object_161.skeleton}
                    />
                    <skinnedMesh
                      name="Object_162"
                      geometry={nodes.Object_162.geometry}
                      material={materials.Monitors}
                      skeleton={nodes.Object_162.skeleton}
                    />
                    <skinnedMesh
                      name="Object_164"
                      geometry={nodes.Object_164.geometry}
                      material={materials.palette}
                      skeleton={nodes.Object_164.skeleton}
                    />
                    <skinnedMesh
                      name="Object_208"
                      geometry={nodes.Object_208.geometry}
                      material={materials.palette}
                      skeleton={nodes.Object_208.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Cube056"
                  position={[112.021, 0, 60.592]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lowpoly_medical_room.glb");
