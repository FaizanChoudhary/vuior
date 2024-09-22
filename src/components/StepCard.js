import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// StepCard styling
const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 77, 64, 0.7)", // Dark teal background with transparency
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transform: "translateY(100%)", // Start below the card
  transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth slide-up effect
  padding: theme.spacing(4),
  borderRadius: "20px",
}));

// Add hover effect to the parent container to trigger the animation
const StepCardContainer = styled(Box)(({ theme }) => ({
  position: "relative", // Important for the overlay to position itself
  backgroundColor: "#ffffff",
  width: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden", // Ensures the overlay stays within the bounds
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)", // Lift the card on hover
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Shadow effect on hover
  },
  // Trigger overlay animation on hover
  "&:hover .overlay": {
    opacity: 1,
    transform: "translateY(0)", // Slide up the overlay on hover
  },
}));

// StepNumber styling
const StepNumber = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: -30,
  width: 70,
  height: 70,
  background: "linear-gradient(135deg, #0F4A3F, #0e7c61)",
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: 600,
}));

const StepCard = ({ stepNumber, title, description, imgSrc, alt }) => {
  return (
    <StepCardContainer data-aos="zoom-in" data-aos-duration="500">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          style={{
            width: "100%",
          }}
        />
        {/* Step number positioned half on the image, half outside */}
        {stepNumber && <StepNumber>{stepNumber}</StepNumber>}
      </Box>
      <Typography
        variant="h5"
        my={{ xs: 5, lg: 7 }}
        color="primary"
        fontSize={24}
      >
        {title}
      </Typography>

      {/* Title appears below the number */}

      {/* Overlay for description */}
      <Overlay className="overlay">
        <Typography variant="h4" gutterBottom fontSize={30}>
          {title}
        </Typography>
        <Typography variant="h6" fontSize={14}>
          {description}
        </Typography>
      </Overlay>
    </StepCardContainer>
  );
};

export default StepCard;
