// src/components/RoleSelector.tsx
import React from "react";
import "./RoleSelector.css";
import { Box, Typography, Button } from "@mui/material";
import BackButton from "./BackButton";

export type Role = "manager" | "operator";

type Props = {
  onSelect: (role: Role) => void;
  onClose?: () => void;
  onBack?: () => void;
};

export default function RoleSelector({ onSelect, onClose, onBack }: Props) {
  const [mounted, setMounted] = React.useState(false);
  const [animating, setAnimating] = React.useState<Role | null>(null);
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => {
      cancelAnimationFrame(raf);
      setMounted(false);
    };
  }, []);

  const handleClick = (role: Role) => {
    console.log("RoleSelector: clicked", role);
    if (animating) return;
    setAnimating(role);
    const delayMs = 600;
    onSelect(role);
    window.setTimeout(() => {
      onClose?.();
      setAnimating(null);
    }, delayMs);
  };

  return (
    <div
      className={`role-selector ${mounted ? "fade-in" : ""}`}
      role="region"
      aria-label="Choose view"
    >
      {onBack && (
        <div className="role-back">
          <BackButton onClick={onBack} />
        </div>
      )}
      <div
        className={`panel left ${animating === "manager" ? "slide-out-right" : ""}`}
        style={{
          backgroundImage: 'url("/assets/manager.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography sx={{ color: "#333333" }} variant="h3" gutterBottom>
            Business Manager
          </Typography>
          <Typography
            sx={{ mb: 2, maxWidth: 420, mx: "auto" }}
            color="textSecondary"
          >
            Manage inventory, analytics and operations.
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleClick("manager")}
            sx={{ backgroundColor: "#d94d14" }}
          >
            Open Manager
          </Button>
        </Box>
      </div>

      <div
        className={`panel right ${animating === "operator" ? "slide-out-left" : ""}`}
        style={{
          backgroundImage: 'url("/assets/operator.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          textAlign="center"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography sx={{ color: "#333333" }} variant="h3" gutterBottom>
            Operator
          </Typography>
          <Typography
            sx={{ mb: 2, maxWidth: 420, mx: "auto" }}
            color="textSecondary"
          >
            Fast operational controls & workflows.
          </Typography>
          <Button variant="contained" onClick={() => handleClick("operator")}>
            Open Operator
          </Button>
        </Box>
      </div>
    </div>
  );
}
