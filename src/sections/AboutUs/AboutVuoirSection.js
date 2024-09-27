import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Section container similar to FinancialFreedomSection
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  marginTop: "-6px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Image container with gradient overlay
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative", // For positioning gradient overlay
  img: {
    width: "100%",
    height: "80vh",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "100%", // Adjust width for small screens
      height: "auto",
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: "50%", // Start gradient from the center for fade effect
    background: "linear-gradient(to left, transparent, #e6f4f1 100%)",
    zIndex: 1, // Ensure gradient is over the image
  },
}));

const AboutVuoirSection = () => {
  // const navigate = useNavigate();

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
            About Vuior
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Welcome to VUIOR, a member-owned financial services provider
            dedicated to helping individuals and families achieve financial
            stability and success. At VUIOR, we pride ourselves on offering
            innovative, customer-focused programs that respond to the evolving
            needs of our members
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
            // onClick={() => navigate("/")}
            onClick={() =>
              window.open("https://add.vuior.com/user/login", "_blank")
            }
          >
            Join For Free
          </Button>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <ImageContainer>
            <img
              src="/assets/new/black-family.jpeg" // Replace with actual image path
              alt="About Vuior"
            />
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default AboutVuoirSection;
