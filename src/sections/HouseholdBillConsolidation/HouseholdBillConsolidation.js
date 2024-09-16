import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import { styled } from "@mui/system";

// Custom Container for the section
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 2),
  },
}));

// Custom Image Container
const ImageContainer = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      display: "none", // Hide image on small screens
    },
  },
}));

// Button styles
const ApplyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#064e3b",
  color: "#fff",
  padding: theme.spacing(1.5, 3),
  marginTop: theme.spacing(4),
  "&:hover": {
    backgroundColor: "#0F4A3F",
  },
  borderRadius: "25px",
}));

// Footer Links
const FooterLinks = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const HouseholdBillConsolidation = () => {
  return (
    <SectionContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section: Text Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Vuior{" "}
            <span style={{ color: "#00bfa5" }}>
              Household Bill Consolidation
            </span>{" "}
            Program
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to Vuior’s Household Bill Consolidation Programs, where we
            help you manage and reduce your household expenses through group
            negotiated discounts. Our partnerships with highly-rated,
            best-in-class carriers and providers ensure that you receive the
            best possible rates and services.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Each plan is monitored by Vuior and its member committees to ensure
            that as needs and times change, Vuior Household Bill Consolidation
            programs respond by delivering innovative, relevant coverage and
            service that exceeds our members’ expectations.
          </Typography>

          {/* Apply Button */}
          <ApplyButton variant="contained" endIcon={<span>&#10132;</span>}>
            Apply Now
          </ApplyButton>

          {/* Footer Links */}
          <FooterLinks>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#064e3b", fontWeight: "bold" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#064e3b", fontWeight: "bold" }}
            >
              Terms And Condition
            </Link>
          </FooterLinks>
        </Grid>

        {/* Right Section: Image */}
        <Grid item xs={12} md={6}>
          <ImageContainer>
            <img
              src="/assets/house_holder_image.png"
              alt="Household Bill Consolidation"
            />
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HouseholdBillConsolidation;
