// @ts-nocheck
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

export function Lights() {
  const ambientRef = useRef();
  const directionalRef = useRef();
  const pointRef = useRef();
  const spotRef = useRef();

  useControls("Ambient Light", {
    visible: {
      value: true,
      onChange: (v) => {
        ambientRef.current.visible = v;
      },
    },
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      onChange: (v) => {
        ambientRef.current.intensity = v;
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Directional Light", {
    visible: {
      value: false,
      onChange: (v) => {
        directionalRef.current.visible = v;
      },
    },
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      onChange: (v) => {
        directionalRef.current.intensity = v;
      },
    },
    position: {
      x: 300,
      y: 300,
      z: 300,
      onChange: (v) => {
        directionalRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        directionalRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Point Light", {
    visible: {
      value: false,
      onChange: (v) => {
        pointRef.current.visible = v;
      },
    },
    intensity: {
      value: 50,
      min: 0,
      max: 1000,
      onChange: (v) => {
        pointRef.current.intensity = v;
      },
    },
    position: {
      x: 0,
      y: 10,
      z: 0,
      onChange: (v) => {
        pointRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        pointRef.current.color = new THREE.Color(v);
      },
    },
  });

  useControls("Spot Light", {
    visible: {
      value: false,
      onChange: (v) => {
        spotRef.current.visible = v;
      },
    },
    intensity: {
      value: 50,
      min: 0,
      max: 1000,
      onChange: (v) => {
        spotRef.current.intensity = v;
      },
    },
    position: {
      x: 0,
      y: 10,
      z: 0,
      onChange: (v) => {
        spotRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        spotRef.current.color = new THREE.Color(v);
      },
    },
  });

  return (
    <>
      <ambientLight ref={ambientRef} castShadow />
      <directionalLight ref={directionalRef} castShadow />
      <pointLight ref={pointRef} castShadow />
      <spotLight ref={spotRef} castShadow />
    </>
  );
}
