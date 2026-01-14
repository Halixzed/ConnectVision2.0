import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  //InputBase,
  IconButton,
} from "@mui/material";
//import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import settingsIcon from "../assets/SettingsIcon.svg";
import GuidedBeacon from "./GuidedBeacon";

type Props = { onBack?: () => void };

export default function Header({ onBack }: Props) {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ backgroundColor: "#1f1f1f", color: "#fff" }}
    >
      <GuidedBeacon
        target=".settings-button"
        content="Configure your preferences here."
        delayMs={650}
        repeat
      />
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          {onBack && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={onBack}
              aria-label="Back"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          {/*<img src="/assets/logo-small.png" alt="logo" style={{ height: 28 }} />*/}
          <Typography variant="h6" component="div">
            LOGO
          </Typography>
        </Box>

        

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            12/01/2026 12:59
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                background: "linear-gradient(45deg, #d94d14 0%, #f06a24 100%)",
                borderRadius: "6px",
                padding: "4px",
              }}
            />
          </IconButton>
        </Box>


      </Toolbar>
    </AppBar>
  );
}
