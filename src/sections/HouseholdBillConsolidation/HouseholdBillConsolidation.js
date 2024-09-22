import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProgramFormDialog from "../../components/ProgramFormDialog";

// Custom Container for the section
const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#e6f4f1",
  marginTop: "60px !important",
}));

// Custom Image Container with gradient overlay
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  img: {
    width: "100%",
    height: "80vh",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: "80vh", // Adjust height for larger screens
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

// Footer Links
// const FooterLinks = styled(Box)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   display: "flex",
//   gap: theme.spacing(3),
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
// }));

const HouseholdBillConsolidation = () => {
  const [open, setOpen] = useState(false);

  return (
    <SectionContainer>
      <Grid container alignItems="center">
        {/* Left Section: Text Content */}
        <Grid item xs={12} md={6} data-aos="fade-up" sx={{ padding: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            VUIOR{" "}
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
            Each plan is monitored by VUIOR and its member committees to ensure
            that as needs and times change, VUIOR Household Bill Consolidation
            programs respond by delivering innovative, relevant coverage and
            service that exceeds our members’ expectations.
          </Typography>

          {/* Apply Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#064E3B",
              paddingX: 4,
              paddingY: 1,
              borderRadius: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              marginTop: 5,
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.2s ease",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Apply Now <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
          </Button>
          {/* Footer Links */}
          {/* <FooterLinks>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#064e3b", fontWeight: "bold", fontSize: 14 }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#064e3b", fontWeight: "bold", fontSize: 14 }}
            >
              Terms And Condition
            </Link>
          </FooterLinks> */}
        </Grid>

        {/* Right Section: Image */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <ImageContainer>
            <img
              src="/assets/house_holder_image.png"
              alt="Household Bill Consolidation"
            />
          </ImageContainer>
        </Grid>
      </Grid>
      {open ? (
        <ProgramFormDialog
          isHouseHoldProgramPage={true}
          handleClose={() => setOpen(false)}
        />
      ) : null}
    </SectionContainer>
  );
};

export default HouseholdBillConsolidation;
