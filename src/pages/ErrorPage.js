import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography variant="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
