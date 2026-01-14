// src/components/HeroSlide.tsx
import React from "react";
import "./HeroSlide.css";
import { Box, Typography, Button, Stack } from "@mui/material";

type Props = {
  visible: boolean;
  onClose: () => void; // called only when "Get started" is pressed
};

export default function HeroSlide({ visible, onClose }: Props) {
  const primaryRef = React.useRef<HTMLButtonElement | null>(null);

  // Focus the primary CTA when the hero becomes visible
  React.useEffect(() => {
    if (visible) primaryRef.current?.focus();
  }, [visible]);

  return (
    <div
      className={`hero-root ${visible ? "hero-visible" : "hero-hidden"}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hero-title"
    >
      <Box className="hero-content">
        <Typography
          id="hero-title"
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
        >
          {/* flexeserve (second 'e' colored) */}
          {"fl" + "e" + "x"}
          <Box component="span" sx={{ color: "#d94d14", display: "inline" }}>
            e
          </Box>
          {"serve "}

          {/* Connect (the 'e' colored) */}
          {"Conn"}
          <Box component="span" sx={{ color: "#d94d14", display: "inline" }}>
            e
          </Box>
          {"ct"}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={onClose}
            ref={primaryRef}
            aria-label="Get started"
            disableRipple
            sx={{
              backgroundColor: "#d94d14",
              color: "#fff",
              "&:hover": { backgroundColor: "#c03f0f" },
              "&:focus": { boxShadow: "0 0 0 4px rgba(217,77,20,0.15)" },
            }}
          >
            GET STARTED
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
