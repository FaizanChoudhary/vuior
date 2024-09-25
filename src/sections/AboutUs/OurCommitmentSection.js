import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import StepCard from "../../components/StepCard";

// Main Component for the "Our Commitment" Section
const OurCommitmentSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Section Title */}
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 24, md: 30 }}
        >
          Our Commitment
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
            margin: "0",
          }}
        />
      </Box>

      {/* Grid Layout for Commitment Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <StepCard
            title="Member-Owned Model"
            description="When you become a member of VUIOR, you effectively become a part owner. This unique model ensures that our members have a voice in the organization and a stake in our collective success. Your membership means more than just access to services; it means being part of a community that values your input and prioritizes your financial well-being."
            imgSrc="/assets/member.png"
            alt="member"
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <StepCard
            title="Diversity, Equity, And Inclusion"
            description="VUIOR is committed to fostering a diverse, equitable, and inclusive environment. We believe that embracing diversity strengthens our community and enhances our ability to serve all members effectively. Our DEI initiatives ensure that every member feels valued and supported, regardless of their background."
            imgSrc="/assets/diversity.png"
            alt="diversity"
          />
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: "flex" }}>
          <StepCard
            title="Customer-Focused Approach"
            description="At VUIOR, our members are at the heart of everything we do. We focus on understanding and meeting your needs, creating lifelong relationships, and building a supportive community. Our customer-focused model ensures that we provide personalized support and services designed to help you achieve your financial goals."
            imgSrc="/assets/new/shutterstock_72345286.jpg"
            alt="customer"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurCommitmentSection;
