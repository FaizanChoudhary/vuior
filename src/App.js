import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Router from "./routes"; // Import the routes

function App() {
  const routing = useRoutes(Router);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
