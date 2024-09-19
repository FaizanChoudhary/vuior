import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

// Section container similar to FinancialFreedomSection
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  marginTop: "70px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Image container with gradient overlay
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: "50%",
    background: "linear-gradient(to left, transparent, #e6f4f1 100%)",
    zIndex: 1,
  },
}));

const AboutVuoirSection = () => {
  return (
    <SectionContainer>
      <Grid container alignItems="center">
        {/* Left Section - Text */}
        <Grid item xs={12} md={6} data-aos="fade-up" sx={{ padding: 5 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 2 }}
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
              backgroundColor: "#064E3B",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.2s ease",
              },
            }}
          >
            Join For Free
          </Button>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <ImageContainer>
            <img
              src="/assets/welcome_about_us.png" // Replace with actual image path
              alt="About Vuoir"
            />
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default AboutVuoirSection;
