import { Box } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Header from "../components/Header";
import connectLogo from "../assets/connect_flexeserve.svg";
import "./OperatorPage.css";

type Props = { onBack?: () => void };

export default function OperatorPage({ onBack }: Props) {
  return (
    <div className="operator-page">
      <Header
        onBack={onBack}
        title="2741593 - Grand Prairie | W Camp Wisdom Rd"
      />

      <div className="operator-content">
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

          <div className="operator-card">
            <div className="operator-card-header">Pizza Spinner</div>
            <div className="operator-card-body center">
              <button className="power-button" type="button" aria-label="Power">
                <PowerSettingsNewIcon fontSize="large" />
              </button>
            </div>
          </div>

          <div className="operator-card">
            <div className="operator-card-header">Roller Grill</div>
            <div className="operator-card-body center">
              <div className="error-tile" role="status" aria-label="Error">
                <WarningAmberIcon fontSize="large" />
                <span className="error-text">ERROR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box component="img" src={connectLogo} alt="connect" className="operator-footer-logo" />
    </div>
  );
}
