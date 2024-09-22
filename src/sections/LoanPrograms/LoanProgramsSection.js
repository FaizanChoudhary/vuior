import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProgramFormDialog from "../../components/ProgramFormDialog";

// Section container with background color and spacing
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  marginTop: "60px !important",
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

const LoanProgramsSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <SectionContainer>
      <Grid container alignItems="center">
        {/* Left Section - Text Content */}
        <Grid item xs={12} md={6} data-aos="fade-up" sx={{ padding: 5 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 2 }}
          >
            Vuoir Member{" "}
            <span style={{ color: "#064E3B", fontWeight: "bold" }}>
              Loan Programs
            </span>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Vuoir’s Member Loan Programs are designed to provide flexible and
            accessible financial solutions to our members. Offered through
            partnerships with highly-rated, best-in-class institutions, our loan
            programs are tailored to meet a variety of needs, ensuring you have
            the financial support necessary for personal and professional
            growth.
          </Typography>
          {/* Apply Now Button */}
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
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.2s ease",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Apply Now <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
          </Button>
          {/* Privacy Policy and Terms Links */}
          {/* <Box sx={{ display: "flex", gap: 2, marginTop: 2, fontSize: 14 }}>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "#064E3B" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", color: "#064E3B", fontSize: 14 }}
            >
              Terms and Conditions
            </Typography>
          </Box> */}
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6} data-aos="fade-up">
          <ImageContainer>
            <img
              src="/assets/loanprograming.png" // Replace with actual image path
              alt="Loan Programs"
            />
          </ImageContainer>
        </Grid>
      </Grid>
      {open ? <ProgramFormDialog handleClose={() => setOpen(false)} /> : null}
    </SectionContainer>
  );
};

export default LoanProgramsSection;
