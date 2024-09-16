import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

// Container for the entire footer
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#002822", // Darker background color
  color: "#e6f4f1", // Light text color for contrast
  padding: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
    textAlign: "center", // Center align for smaller screens
  },
}));

// Social media icon container
const SocialMediaIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "center", // Centered under logo and tagline
  "& svg": {
    fontSize: "2rem",
    marginRight: theme.spacing(2),
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      color: "#00bfa5", // Hover effect on social icons
    },
  },
}));

// Links for pages and services
// Links for pages and services
const FooterLink = styled(NavLink)(({ theme }) => ({
  color: "#e6f4f1",
  textDecoration: "none",
  marginBottom: theme.spacing(1),
  position: "relative",
  paddingBottom: "5px", // Space between text and underline
  display: "inline-block", // Ensures underline is the width of the text
  width: "fit-content", // Makes the element only as wide as the text
  "&:hover": {
    color: "#00bfa5", // Hover color
    "&::after": {
      width: "100%", // Expand underline on hover
    },
  },
  "&.active": {
    color: "#00bfa5", // Active color
    fontWeight: "bold", // Bold active link
    "&::after": {
      width: "100%", // Underline takes full width of the text for active link
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "2px",
    width: "0", // Default underline width is 0
    backgroundColor: "#00bfa5", // Underline color
    transition: "width 0.3s ease", // Smooth width transition
    display: "block", // Ensures the underline appears as a block element
  },
}));

// Bottom text and legal links
const BottomLegal = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  borderTop: "1px solid #004d40", // Subtle line separator
  paddingTop: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // Stack vertically on smaller screens
    textAlign: "center",
  },
}));

// Link styles for legal links
const LegalLink = styled(NavLink)(({ theme }) => ({
  color: "#e6f4f1",
  margin: theme.spacing(0, 1), // Add margin between links
  textDecoration: "none",
  "&:hover": {
    color: "#00bfa5", // Hover effect
    textDecoration: "underline",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4}>
        {/* Logo and Tagline */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/logo.png" // Replace with actual path to logo
              alt="Vuior Logo"
              style={{ width: "150px", marginBottom: "1rem" }}
            />
            <Typography variant="body1" gutterBottom>
              Empowering Communities, One Member at a Time
            </Typography>
            {/* Social Media Icons */}
            <SocialMediaIcons>
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </SocialMediaIcons>
          </Box>
        </Grid>

        {/* Pages Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Pages
          </Typography>
          <Box display="flex" flexDirection="column">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/programs">Programs</FooterLink>
            <FooterLink to="/membership">Membership</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </Box>
        </Grid>

        {/* Programs & Services Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Programs & Services
          </Typography>
          <Box display="flex" flexDirection="column">
            <FooterLink to="/programs/loan-programs">Loan Programs</FooterLink>
            <FooterLink to="/programs/household-programs">
              Household Bill Consolidation
            </FooterLink>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom copyright and legal links */}
      <BottomLegal>
        {/* Copyright text */}
        <Typography variant="body2">
          © Copyright 2024. All Rights Reserved by VUIOR
        </Typography>

        {/* Legal Links */}
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <LegalLink to="/privacy-policy">Privacy Policy</LegalLink>
          <LegalLink to="/terms-of-service">Terms of Service</LegalLink>
          <LegalLink to="/cookie-policy">Cookie Policy</LegalLink>
          <LegalLink to="/data-protection-policy">
            Data Protection Policy
          </LegalLink>
        </Box>
      </BottomLegal>
    </FooterContainer>
  );
};

export default Footer;
