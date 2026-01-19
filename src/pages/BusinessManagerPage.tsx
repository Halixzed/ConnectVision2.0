import React from "react";
import {
  Container,
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import connectLogo from "../assets/connect_flexeserve.svg";
import Header from "../components/Header";
import "./BusinessManagerPage.css";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import FanLifeWidget from "../components/widgets/FanLifeWidget";
import EnergyUsageWidget from "../components/widgets/EnergyUsageWidget";
import ElementLifeWidget from "../components/widgets/ElementLifeWidget";
import AlarmsWidget from "../components/widgets/AlarmsWidget";
import GatewayErrorWidget from "../components/widgets/GatewayErrorWidget";
import CommanderOfflineWidget from "../components/widgets/CommanderOfflineWidget";
import offlineIcon from "../assets/OfflineIcon.svg";
import warningIcon from "../assets/WarningIcon.svg";
import Beacon from "../components/Beacon";
import GuidedBeacon, {
  type GuidedBeaconHandle,
} from "../components/GuidedBeacon";

const BU_ROWS = [
  {
    id: "east",
    title: "BU Eastern Canada",
    subtitle: "5 stores inside",
    alarms: 2,
    notices: 3,
  },
  {
    id: "gulf",
    title: "BU Gulf Coast",
    subtitle: "489 stores inside",
    alarms: 1368,
    notices: 135,
  },
  {
    id: "tx",
    title: "BU Texas",
    subtitle: "489 stores inside",
    alarms: 1564,
    notices: 93,
  },
  {
    id: "west",
    title: "BU Western Canada",
    subtitle: "5 stores inside",
    alarms: 4,
    notices: 4,
  },
];

export default function BusinessManagerPage({
  onBack,
}: {
  onBack?: () => void;
  onOpen?: (id: string) => void;
}) {
  const widgetsRef = React.useRef<HTMLDivElement | null>(null);
  const [showTour, setShowTour] = React.useState(true);
  const searchBeaconRef = React.useRef<GuidedBeaconHandle | null>(null);
  const offlineBeaconRef = React.useRef<GuidedBeaconHandle | null>(null);
  const alarmsBeaconRef = React.useRef<GuidedBeaconHandle | null>(null);
  const rowsBeaconRef = React.useRef<GuidedBeaconHandle | null>(null);
  const widgetsBeaconRef = React.useRef<GuidedBeaconHandle | null>(null);

  React.useEffect(() => {
    const PackeryCtor = (window as typeof window & { Packery?: any }).Packery;
    if (!PackeryCtor || !widgetsRef.current) return;

    const packery = new PackeryCtor(widgetsRef.current, {
      itemSelector: ".widget-cell",
      gutter: 12,
      percentPosition: true,
    });

    const raf = window.requestAnimationFrame(() => {
      packery.layout?.();
    });

    return () => {
      window.cancelAnimationFrame(raf);
      packery.destroy?.();
    };
  }, []);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setShowTour(false), 2400);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="business-manager-page">
      <GuidedBeacon
        ref={searchBeaconRef}
        target=".search-beacon-target"
        content="Search by location name or number."
        delayMs={350}
      />
      <GuidedBeacon
        ref={offlineBeaconRef}
        target=".offline-beacon-target"
        content="Offline count for this BU."
        delayMs={350}
      />
      <GuidedBeacon
        ref={alarmsBeaconRef}
        target=".alarms-beacon-target"
        content="Active alarms for this BU."
        delayMs={350}
      />
      <GuidedBeacon
        ref={rowsBeaconRef}
        target=".burows-beacon-target"
        content="Business units overview."
        delayMs={350}
      />
      <GuidedBeacon
        ref={widgetsBeaconRef}
        target=".widgets-beacon-target"
        content="Operational widgets and analytics."
        delayMs={350}
      />
      <div
        className={`tour-overlay ${showTour ? "is-visible" : "is-hidden"}`}
        role="status"
        aria-live="polite"
      >
        <div className="tour-card">
          Click the pulsing beacons to learn about our platform.
          <div className="tour-beacon">
            <span className="tour-beacon-icon" aria-hidden />
          </div>
        </div>
      </div>
      <Header onBack={onBack} />
      <div className="app-container">
        <div className="app-left">
          <div className="greetings-messsage">Greetings User</div>
          <div className="separator"></div>
          <div className="greetings-search">
            <div className="left-group">
              <PlaceIcon
                className="greetings-icon"
                aria-hidden
                sx={{ scale: 1.6 }}
              />
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#333333" }}
              >
                View all locations
              </Typography>
            </div>

            <Box className="beacon-host search-beacon-target">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Write to start search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        m: 0,
                        height: "100%",
                        alignSelf: "stretch",
                        display: "flex",
                        alignItems: "center",
                        color: "#333333",
                      }}
                    >
                      <button
                        type="button"
                        aria-label="Search"
                        className="search-button"
                      >
                        <SearchIcon fontSize="small" sx={{ color: "#fff" }} />
                      </button>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: { xs: "100%", sm: 360, md: 500 },
                  maxWidth: { xs: "100%", sm: 420, md: 520 },
                  "& .MuiInputBase-root": {
                    color: "#333333",
                    backgroundColor: "#ffffff",
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#a1a1a1ff",
                    opacity: 1,
                  },
                  "& .MuiOutlinedInput-root": {
                    paddingRight: 0,
                    height: 36,
                  },
                  "& .MuiOutlinedInput-input": {
                    paddingTop: 0,
                    paddingBottom: 0,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiInputAdornment-positionEnd": {
                    marginRight: 0,
                    height: "100%",
                    alignSelf: "stretch",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4a4a4a",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6a6a6a",
                  },
                }}
              />
              <Beacon
                onClick={() => searchBeaconRef.current?.start()}
                label="Search beacon"
              />
            </Box>
          </div>
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box className="bu-list beacon-host burows-beacon-target">
              <Beacon
                onClick={() => rowsBeaconRef.current?.start()}
                label="BU rows beacon"
              />
              {BU_ROWS.map((r) => (
                <Box
                  key={r.id}
                  className="bu-row"
                  sx={{ borderLeft: "4px solid #333333" }}
                >
                  <Box className="bu-row-content">
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                        color="#333333"
                      >
                        {r.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                        }}
                        color="#333333"
                      >
                        {r.subtitle}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <div
                        className={`icon-border ${r.id === "east" ? "beacon-host offline-beacon-target" : ""}`}
                      >
                        <img
                          src={offlineIcon}
                          alt=""
                          className="offline-icon"
                          aria-hidden
                        />
                        <span className="icon-separator" aria-hidden />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#000000ff",
                          }}
                        >
                          {r.alarms}
                        </Typography>
                        {r.id === "east" && (
                          <Beacon
                            onClick={() => offlineBeaconRef.current?.start()}
                            label="Offline beacon"
                          />
                        )}
                      </div>
                      <div
                        className={`icon-border ${r.id === "east" ? "beacon-host alarms-beacon-target" : ""}`}
                      >
                        <img
                          src={warningIcon}
                          alt=""
                          className="warning-icon"
                          aria-hidden
                        />
                        <span className="icon-separator" aria-hidden />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            color: "#000000ff",
                          }}
                        >
                          {r.notices}
                        </Typography>
                        {r.id === "east" && (
                          <Beacon
                            onClick={() => alarmsBeaconRef.current?.start()}
                            label="Alarms beacon"
                          />
                        )}
                      </div>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>

          <img src={connectLogo} alt="connect" className="footer-logo" />
        </div>
        <div className="app-right">
          <div className="widgets-panel beacon-host widgets-beacon-target">
            <Beacon
              onClick={() => widgetsBeaconRef.current?.start()}
              label="Widgets beacon"
            />
            <div ref={widgetsRef} className="widgets-grid">
              <div className="widget-cell">
                <FanLifeWidget />
              </div>
              <div className="widget-cell">
                <EnergyUsageWidget />
              </div>
              <div className="widget-cell">
                <ElementLifeWidget />
              </div>
              <div className="widget-cell">
                <AlarmsWidget />
              </div>
              <div className="widget-cell">
                <GatewayErrorWidget />
              </div>
              <div className="widget-cell">
                <CommanderOfflineWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
