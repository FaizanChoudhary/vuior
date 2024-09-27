import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StepCard from "../../components/StepCard";

// Main Component for "How to Join" Section
const HowToJoin = () => {
  const steps = [
    {
      number: 1,
      title: "Free Membership",
      description:
        "Joining vuior is free. Simply sign up to become a member and gain access to our loan programs and other valuable services.",
      imgSrc: "/assets/howtojoin1.png", // Replace with actual image path
    },
    {
      number: 2,
      title: "Minimum Account Balance",
      description:
        "To keep your membership active, maintain a minimum account balance of $25. This ensures continuous access to all vuior benefits and services.",
      imgSrc: "/assets/howtojoin2.png", // Replace with actual image path
    },
    {
      number: 3,
      title: "Apply For Bill Consolidation",
      description:
        "Once you are a member, you can apply for our household bill consolidation program. Enjoy the benefits of group negotiated discounts, no credit checks, and comprehensive coverage for all your household bills.",
      imgSrc: "/assets/howtojoin3.png", // Replace with actual image path
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
          How to Join
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
        {steps.map((step) => (
          <Grid item xs={12} md={4} key={step.number} sx={{ display: "flex" }}>
            <StepCard
              stepNumber={step.number}
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

export default HowToJoin;
