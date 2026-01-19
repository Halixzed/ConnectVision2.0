import { Canvas } from "@react-three/fiber";
import Header from "../components/Header";
import connectLogo from "../assets/connect_flexeserve.svg";
import "./OperatorPage.css";
import { useRef } from "react";
import type { Mesh } from "three";

type Props = { onBack?: () => void };

function RotatingCube() {
  const meshRef = useRef<Mesh | null>(null);
  
  const fortyFiveDeg = Math.PI / 4;

  return (
    <mesh ref={meshRef} rotation={[fortyFiveDeg, fortyFiveDeg, 0]}>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshStandardMaterial color="#d94d14" />
    </mesh>
  );
}

export default function OperatorPage({ onBack }: Props) {
  return (
    <div className="operator-page">
      <div className="operator-header">
        <Header onBack={onBack} title="Operator View" />
      </div>

      <div className="operator-content">
        <div className="operator-left">
          <div className="operator-grid">
            <div className="operator-card">
              <div className="operator-card-header">Flexeserve - LEFT</div>
              <div className="operator-card-body">
                <div className="temp-row">
                  <span className="status-dot" aria-hidden />
                  <div className="temp-value">
                    <span className="temp-number">170</span>
                    <span className="temp-unit">°F</span>
                  </div>
                </div>
                <div className="temp-row">
                  <span className="status-dot" aria-hidden />
                  <div className="temp-value">
                    <span className="temp-number">170</span>
                    <span className="temp-unit">°F</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="operator-card">
              <div className="operator-card-header">Flexeserve - RIGHT*</div>
              <div className="operator-card-body">
                <div className="temp-row">
                  <span className="status-dot" aria-hidden />
                  <div className="temp-value">
                    <span className="temp-number">170</span>
                    <span className="temp-unit">°F</span>
                  </div>
                </div>
                <div className="temp-row">
                  <span className="status-dot" aria-hidden />
                  <div className="temp-value">
                    <span className="temp-number">170</span>
                    <span className="temp-unit">°F</span>
                  </div>
                </div>
              </div>
            </div>

            

            
          </div>
        </div>
        <div className="operator-right">
          <div className="operator-cube">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[3, 3, 5]} intensity={0.8} />
              <RotatingCube />
            </Canvas>
          </div>
        </div>
      </div>

      <img src={connectLogo} alt="connect" className="operator-footer-logo" />
    </div>
  );
}
