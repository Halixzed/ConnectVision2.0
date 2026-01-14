import {
  Container,
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  //IconButton,
} from "@mui/material";
//import WarningAmberIcon from "@mui/icons-material/WarningAmber";
//import NotificationsIcon from "@mui/icons-material/Notifications";
import connectLogo from "../assets/connect_flexeserve.svg";
import Header from "../components/Header";
import "./BusinessManagerPage.css";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";

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
  return (
    <div className="business-manager-page">
      <Header onBack={onBack} />
      <div className="greetings-search">
        <div className="left-group">
          <PlaceIcon
            className="greetings-icon"
            aria-hidden
            sx={{ scale: 1.6 }}
          />
          <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
            View all BUs
          </Typography>
        </div>

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
                }}
              >
                <Box
                  component="button"
                  type="button"
                  aria-label="Search"
                  sx={{
                    background: "linear-gradient(45deg, #d94d14 0%, #f06a24 100%)",
                    borderRadius: "0 6px 6px 0",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 35,
                    position: "relative",
                    top: 2,
                    cursor: "pointer",
                  }}
                >
                  <SearchIcon fontSize="small" sx={{ color: "#fff" }} />
                </Box>
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: 500,
            "& .MuiInputBase-root": {
              color: "#fff",
              backgroundColor: "#2b2b2b",
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
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
      </div>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box className="bu-list">
          {BU_ROWS.map((r) => (
            <Box
              key={r.id}
              className="bu-row"
              sx={{ borderLeft: "4px solid #ffffffff" }}
            >
              <Box className="bu-row-content">
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Inter, sans-serif", fontWeight: 100 }}
                    color="white"
                  >
                    {r.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: "Inter, sans-serif", fontWeight: 100 }}
                    color="lightgray"
                  >
                    {r.subtitle}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} alignItems="center">
                  <div className="icon-border">
                    <span className="icon-dot" aria-hidden />
                    <span className="icon-separator" aria-hidden />
                    <span className="icon-dot" aria-hidden />
                  </div>
                  <div className="icon-border">
                    <span className="icon-dot" aria-hidden />
                    <span className="icon-separator" aria-hidden />
                    <span className="icon-dot" aria-hidden />
                  </div>
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <img
        src={connectLogo}
        alt="connect"
        className="footer-logo"
      />
    </div>
  );
}
