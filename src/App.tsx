// src/App.tsx
import React from "react";
import "./App.css";
import HeroSlide from "./components/HeroSlide";
import type { Role } from "./components/RoleSelector";
import RoleSelector from "./components/RoleSelector";
import BusinessManagerPage from "./pages/BusinessManagerPage";
import OperatorPage from "./pages/OperatorPage";

//import BUDetail from "./pages/BUDetail";

const SLIDE_MS = 600;

export default function App() {
  const [heroVisible, setHeroVisible] = React.useState(true);
  const [selectorVisible, setSelectorVisible] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState<Role | null>(null);
  const [enterDirection, setEnterDirection] = React.useState<
    "left" | "right" | null
  >(null);
  const [pageEnter, setPageEnter] = React.useState(false);
  React.useEffect(() => {
    if (!selectedRole) return;
    setPageEnter(false);
    const raf = requestAnimationFrame(() => setPageEnter(true));
    return () => cancelAnimationFrame(raf);
  }, [selectedRole]);
  // Reveal selector after hero slide completes
  const handleGetStarted = () => {
    //console.log("Hero: Get started pressed — hiding hero");
    setHeroVisible(false);
    setTimeout(() => setSelectorVisible(true), SLIDE_MS);
  };

  const handleSelectRole = (role: Role) => {
    //console.log("App: handleSelectRole called with", role);
    setSelectedRole(role);
    setEnterDirection(role === "manager" ? "left" : "right");
    // give time for panel animation to finish inside RoleSelector (it calls onSelect after transitionend)
    //setSelectorVisible(false);

    //requestAnimationFrame(() => setPageEnter(true));
  };

  const handleBackToSelector = () => {
    //console.log("App: Back to selector");
    // start exit animation
    setPageEnter(false);
    // after transition finishes, clear role and show selector
    setTimeout(() => {
      setSelectedRole(null);
      setSelectorVisible(true);
      setEnterDirection(null);
    }, 650); // must match CSS duration (600ms + small buffer)
  };

  return (
    <div className="app-root">
      <HeroSlide visible={heroVisible} onClose={handleGetStarted} />

      {selectorVisible && !selectedRole && (
        <RoleSelector
          onSelect={handleSelectRole}
          onClose={() => {
            console.log(
              "App: RoleSelector finished - hiding selector and entering page",
            );
            setSelectorVisible(false);
          }}
        />
      )}

      {/* Show selected role page */}
      {selectedRole === "manager" && (
        <div
          className={`page-slide ${enterDirection === "left" ? "from-left" : ""} ${pageEnter ? "enter" : ""}`}
        >
          <BusinessManagerPage onBack={handleBackToSelector} />
        </div>
      )}
      {selectedRole === "operator" && (
        <div
          className={`page-slide ${enterDirection === "right" ? "from-right" : ""} ${pageEnter ? "enter" : ""}`}
        >
          <OperatorPage onBack={handleBackToSelector} />
        </div>
      )}
    </div>
  );
}
