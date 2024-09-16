import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Router from "./routes"; // Import the routes
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);
  const routing = useRoutes(Router);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
