import React from "react";
import { Box, Typography, Button } from "@mui/material";

const EnsureQualitySection = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: "#EEF9F6", // Light green background
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#064E3B" }}
      >
        How We Ensure Quality
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{ marginBottom: 3, color: "#333" }}
      >
        Each program at Vuoir is carefully monitored by our dedicated member
        committees. These committees work tirelessly to ensure that as needs and
        times change, our programs respond by delivering innovative, relevant
        coverage and service that exceeds our members’ expectations. This
        continuous improvement process helps us stay ahead of industry trends
        and consistently meet the evolving needs of our community.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          paddingX: 4,
          paddingY: 1,
          backgroundColor: "#064E3B",
          borderRadius: "20px",
          fontWeight: "bold",
        }}
      >
        Join for Free
      </Button>
    </Box>
  );
};

export default EnsureQualitySection;
