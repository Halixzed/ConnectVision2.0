import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = { onBack?: () => void };

export default function OperatorPage({ onBack }: Props) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {onBack && (
            <IconButton edge="start" color="inherit" onClick={onBack}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6">Operator View</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Operator Dashboard
          </Typography>
          <Typography color="textSecondary">
            Operational controls and quick actions go here.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
