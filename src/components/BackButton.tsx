import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  onClick?: () => void;
  ariaLabel?: string;
};

export default function BackButton({ onClick, ariaLabel = "Back" }: Props) {
  return (
    <IconButton
      sx={{ color: "#333333" }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}
