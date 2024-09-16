import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4A3F",
    },
    secondary: {
      main: "#ff5722",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    color: "#0F4A3F",
    body2: {
      color: "#666",
    },
  },
});

export default theme;
