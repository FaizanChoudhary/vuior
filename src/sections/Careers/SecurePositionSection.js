import React from "react";
import { Box, Typography, Button } from "@mui/material";

const SecurePositionSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: "#E0F2F1",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", color: "#2E7D32", marginBottom: 2 }}
      >
        Secure Your Position
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Register For The Vuoir Mega Nationwide Hiring Event Now And Set The Time
        On Your Calendar. This Is How Your Success Journey Starts!
      </Typography>

      {/* Apply Now Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#2E7D32",
          paddingX: 4,
          paddingY: 1,
          borderRadius: "20px",
          fontWeight: "bold",
        }}
      >
        Apply Now &rarr;
      </Button>
    </Box>
  );
};

export default SecurePositionSection;
