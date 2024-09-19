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
        <Grid item xs={12} md={4}>
          <StepCard
            title="Member-Owned Model"
            description="When you become a member of Vuoir, you effectively become a part owner. This unique model ensures that our members have a voice in the organization and a stake in our collective success."
            imgSrc="/assets/member.png"
            alt="member"
          />
          {/* <CommitmentCard
            imageSrc="/assets/member.png" // Replace with the correct image path
            title="Member-Owned Model"
            description="When you become a member of Vuoir, you effectively become a part owner. This unique model ensures that our members have a voice in the organization and a stake in our collective success."
          /> */}
        </Grid>

        <Grid item xs={12} md={4}>
          <StepCard
            title="Diversity, Equity, And Inclusion"
            description="Vuoir is committed to fostering a diverse, equitable, and inclusive environment. We believe that embracing diversity strengthens our community and enhances our ability to serve all members effectively."
            imgSrc="/assets/diversity.png"
            alt="diversity"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <StepCard
            title="Customer-Focused Approach"
            description="At Vuoir, our members are at the heart of everything we do. We focus on understanding and meeting your needs, creating lifelong relationships, and building a supportive community."
            imgSrc="/assets/customer.png"
            alt="customer"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurCommitmentSection;
