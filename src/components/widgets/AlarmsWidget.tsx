import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "./WidgetBase.css";
import "./AlarmsWidget.css";

export default function AlarmsWidget() {
  return (
    <div className="widget-card widget-alarms">
      <div className="widget-title">
        <WarningAmberIcon fontSize="small" />
        Active Alarms
      </div>
      <div className="alarm-count">12</div>
      <div className="alarm-list"></div>
    </div>
  );
}
