import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import StepCard from "../../components/StepCard";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "No Credit Check",
      description:
        "We welcome applicants from all credit backgrounds. Our loans do not require a credit check, making it easier for everyone to access the funds they need.",
      imgSrc: "/assets/loanworks1.png",
      alt: "loanworks1",
    },
    {
      number: "2",
      title: "In-House And Special Financing",
      description:
        "vuior offers both in-house financing and special financing options to provide additional flexibility and support.",
      imgSrc: "/assets/loanworks2.png",
      alt: "loanworks2",
    },
    {
      number: "3",
      title: "Membership Requirement",
      description:
        "While anyone can apply for our loans, becoming a vuior member is necessary to take full advantage of our programs. Membership is free to join, and maintaining an account balance of $25 ensures continuous access to all benefits.",
      imgSrc: "/assets/loanworks3.png",
      alt: "loanworks3",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: "#EEF9F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={30}
        >
          How It Works
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      {/* Responsive Grid */}
      <Grid container spacing={4} mt={1}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
            <StepCard
              title={step.title}
              description={step.description}
              imgSrc={step.imgSrc}
              alt={step.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
