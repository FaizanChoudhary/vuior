import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";

// Main Component for the Loan Programs Section
const LoanProgramsSection = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text Content */}
        <Grid item xs={12} md={6}>
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
              marginBottom: 2,
            }}
          >
            Apply Now &rarr;
          </Button>

          {/* Privacy Policy and Terms Links */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 2, fontSize: 14 }}>
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
          </Box>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/loanprograming.png" // Replace with actual image path
            alt="Loan Programs"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoanProgramsSection;
