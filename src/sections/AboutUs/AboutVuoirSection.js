import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";

const AboutVuoirSection = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#2E7D32", marginBottom: 2 }}
          >
            About Vuoir
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Welcome to vuoir, a member-owned financial services provider
            dedicated to helping individuals and families achieve financial
            stability and success. At vuoir, we pride ourselves on offering
            innovative, customer-focused programs that respond to the evolving
            needs of our members.
          </Typography>

          {/* Join For Free Button */}
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
            Join For Free
          </Button>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/welcome_about_us.png" // Replace with actual image path
            alt="About Vuoir"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutVuoirSection;
