import { Canvas } from "@react-three/fiber";
import Header from "../components/Header";
import connectLogo from "../assets/connect_flexeserve.svg";
import "./OperatorPage.css";
import { useRef, useState } from "react";
import type { Mesh } from "three";
import AnimatedContent from "../components/AnimatedContent";
//import { Typography } from "@mui/material";

type Props = { onBack?: () => void };
type RotatingCubeProps = {
  position?: [number, number, number];
};

export function RotatingCube({ position = [0, 0, 0] }: RotatingCubeProps) {
  const meshRef = useRef<Mesh | null>(null);

  const fortyFiveDeg = Math.PI / 4;

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[fortyFiveDeg, fortyFiveDeg, 0]}
    >
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshStandardMaterial color="#242424ff" />
    </mesh>
  );
}


export default function OperatorPage({ onBack }: Props) {
  const tempOptions = ["Off", "Lights Only", "170F", "175F", "180F"];
  const [temps, setTemps] = useState(["170F", "170F", "170F", "170F"]);

  const updateTemp = (index: number, value: string) => {
    setTemps((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <div className="operator-page">
      <div className="operator-header">
        <Header onBack={onBack} title="Operator View" />
      </div>

      <div className="operator-content">
        <div className="operator-left">
          <div className="operator-grid">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <div className="operator-card">
                <div className="operator-card-header">Flexeserve - LEFT</div>
                <div className="operator-card-body">
                  <div className="temp-row">
                    <span className="status-dot" aria-hidden />
                    <select
                      className="temp-select"
                      value={temps[0]}
                      onChange={(event) => updateTemp(0, event.target.value)}
                    >
                      {tempOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="temp-row">
                    <span className="status-dot" aria-hidden />
                    <select
                      className="temp-select"
                      value={temps[1]}
                      onChange={(event) => updateTemp(1, event.target.value)}
                    >
                      {tempOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.1}
            >
              <div className="operator-card">
                <div className="operator-card-header">Flexeserve - RIGHT*</div>
                <div className="operator-card-body">
                  <div className="temp-row">
                    <span className="status-dot" aria-hidden />
                    <select
                      className="temp-select"
                      value={temps[2]}
                      onChange={(event) => updateTemp(2, event.target.value)}
                    >
                      {tempOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="temp-row">
                    <span className="status-dot" aria-hidden />
                    <select
                      className="temp-select"
                      value={temps[3]}
                      onChange={(event) => updateTemp(3, event.target.value)}
                    >
                      {tempOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <div className="operator-right">
          <div className="operator-cube">
            <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[3, 3, 5]} intensity={0.8} />
              <RotatingCube position={[3, 0, 0]} />
              <RotatingCube position={[-3, 0, 0]} />
            </Canvas>
          </div>
          <div>
            <h6>Placeholder cubes for the 2, 2 Tier Units :) </h6>
          </div>
        </div>
      </div>

      <img src={connectLogo} alt="connect" className="operator-footer-logo" />
    </div>
  );
}
