import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container with a two-tone background
const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  // background: "linear-gradient(to right, #e0f2f1, #b2dfdb)",
  overflow: "hidden",
}));

// Image container with modern styling
const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  boxShadow: theme.shadows[5],
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(50%)", // Darken the image for better text visibility
  },
}));

const OverlayTextBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: theme.spacing(4),
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "16px",
  boxShadow: theme.shadows[5],
  maxWidth: "90%", // Make the max width responsive
  textAlign: "center",
  zIndex: 1,
  backdropFilter: "blur(10px)", // Adding a blur effect

  // Responsive styles
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5),
    maxWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
    maxWidth: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(7),
    maxWidth: "60%",
  },
}));

const FinancialEmpowermentSection = () => {
  return (
    <SectionContainer data-aos="zoom-in">
      <Grid container spacing={0}>
        {/* Image Section */}
        <Grid item xs={12}>
          <ImageBox>
            <img
              src="/assets/join_empowerment.png"
              alt="Financial Empowerment"
            />
          </ImageBox>
        </Grid>
        {/* <Grid item xs={12} lg={6}>
          <ImageBox>
            <img
              src="/assets/join_empowerment.png"
              alt="Financial Empowerment"
            />
          </ImageBox>
        </Grid> */}

        {/* Text Section */}
        <Grid item xs={12}>
          <OverlayTextBox>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 2 }}
            >
              Join Us In Driving The Financial Empowerment Revolution Forward
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: 3, color: "#333" }}>
              Participate in a revolutionary movement aimed at improving
              financial stability, independence, and literacy for people and
              communities. Help us propel the financial empowerment revolution
              forward by providing individuals with the tools and knowledge to
              take charge of their financial destiny. Together, we can remove
              obstacles to monetary achievement and build a thriving, equitable
              community.
            </Typography>
          </OverlayTextBox>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default FinancialEmpowermentSection;
