import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
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
    color: "#004d40",
    body2: {
      color: "#666",
    },
  },
});

export default theme;
