import React from "react";
import { Box, Typography, Button } from "@mui/material";

const EnsureQualitySection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 4, md: 6 },
        backgroundColor: "#EEF9F6", // Light green background
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 24, md: 30 }}
        >
          How We Ensure Quality
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
            margin: "0",
          }}
        />
      </Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#064E3B", fontSize: 30 }}
      ></Typography>

      {/* Description */}
      <Typography
        data-aos="fade-up"
        variant="body1"
        component="p"
        gutterBottom
        sx={{ marginBottom: 3, color: "#333", fontSize: 16 }}
      >
        Each program at Vuio is carefully monitored by our dedicated member
        committees. These committees work tirelessly to ensure that as needs and
        times change, our programs respond by delivering innovative, relevant
        coverage and service that exceeds our members’ expectations. This
        continuous improvement process helps us stay ahead of industry trends
        and consistently meet the evolving needs of our community.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        data-aos="fade-up"
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
