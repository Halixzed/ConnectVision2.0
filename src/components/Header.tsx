import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import settingsIcon from "../assets/SettingsIcon.svg";
import GuidedBeacon, { type GuidedBeaconHandle } from "./GuidedBeacon";
import Beacon from "./Beacon";
import React from "react";
import BackButton from "./BackButton";

type Props = { onBack?: () => void };

export default function Header({ onBack }: Props) {
  const beaconRef = React.useRef<GuidedBeaconHandle | null>(null);
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const timeLabel = now.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        backgroundColor: "#ffffffff",
        color: "#202020",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
        borderBottom: "1px solid #2c2c2c",
      }}
    >
      <GuidedBeacon
        ref={beaconRef}
        target=".settings-button"
        content="Configure your preferences here."
        delayMs={650}
        autoStart={false}
      />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          {onBack && (
            <BackButton onClick={onBack} />
          )}
          <Typography variant="h6" component="div">
            LOGO
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {timeLabel}
          </Typography>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <IconButton
              className="settings-button"
              color="inherit"
              aria-label="Settings"
            >
              <Box
                component="img"
                src={settingsIcon}
                alt=""
                sx={{
                  width: 20,
                  height: 20,
                  background:
                    "linear-gradient(45deg, #d94d14 0%, #f06a24 100%)",
                  borderRadius: "6px",
                  padding: "4px",
                }}
              />
            </IconButton>
            <Beacon onClick={() => beaconRef.current?.start()} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
