// src/components/HeroSlide.tsx
import React from "react";
import "./HeroSlide.css";
import { Box, Button, Stack } from "@mui/material";
import heroVideo from "../assets/HeroBackground.mp4";

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
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
          src={heroVideo}
        ></video>
      </div>

      <Box className="hero-content">
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={onClose}
            ref={primaryRef}
            aria-label="Get started"
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
