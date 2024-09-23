import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Section container
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  marginTop: "60px !important",
  display: "flex",
  flexDirection: "column",
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

const HeroLoanDetailSection = ({ data }) => {
  return (
    <SectionContainer>
      <Grid container alignItems="center">
        {/* Left Section - Text */}
        <Grid item xs={12} md={6} data-aos="fade-up" sx={{ padding: 5 }}>
          <Typography
            fontWeight="bold"
            color="primary"
            fontSize={{ xs: 24, md: 36 }}
            data-aos="fade-up"
            mb={1}
          >
            {data.pageTitle}
          </Typography>
          <Typography variant="h6" color="primary" fontWeight="bold">
            About Program
          </Typography>
          <Box
            sx={{
              width: "15%",
              borderBottom: "3px solid #23AB84",
              marginBottom: 3,
            }}
          />
          <Typography variant="body1" sx={{ my: 2 }}>
            {data.aboutDescription}
          </Typography>

          <Typography variant="h6" color="primary" fontWeight="bold">
            Program Highlights
          </Typography>
          <Box
            sx={{
              width: "20%",
              borderBottom: "3px solid #23AB84",
              marginBottom: 2,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            {data.highlights.map((highlight, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "0.5em" }}>•</span>
                  <Typography variant="body1" fontWeight="bold">
                    {highlight.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {highlight.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <ImageContainer>
            <img
              src={data.heroImage} // Use actual image path
              alt="heroImage"
            />
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HeroLoanDetailSection;
