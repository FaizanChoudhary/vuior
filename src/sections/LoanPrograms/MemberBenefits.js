import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import StepCard from "../../components/StepCard";

const MemberBenefits = ({ isHouseHoldProgramPage }) => {
  const benefits = [
    {
      title: "Ownership And Community",
      description:
        "When You Become A Member Of VUIOR, You Effectively Become A Part Owner. This Gives You A Voice In Our Organization And A Stake In Our Collective Success.",
      imgSrc: "/assets/memberbenefits1.png", // Replace with actual image path
      alt: "memberbenefits1",
    },
    {
      title: "Commitment To Diversity, Equity, And Inclusion",
      description:
        "VUIOR Is Dedicated To Fostering A Diverse, Equitable, And Inclusive Environment. We Believe That Embracing Diversity Strengthens Our Community And Enhances Our Ability To Serve All Members Effectively.",
      imgSrc: "/assets/memberbenefits2.png", // Replace with actual image path
      alt: "memberbenefits2",
    },
    {
      title: "Customer-Focused Model",
      description:
        "Our Approach Prioritizes Your Needs. We Offer Personalized Support And Services Aimed At Building Lifelong Relationships And Fostering A Supportive Community.",
      imgSrc: "/assets/memberbenefits3.png", // Replace with actual image path
      alt: "memberbenefits3",
    },
    {
      title: "Continuous Improvement",
      description:
        "Each Loan Plan Is Monitored By VUIOR And Its Member Committees To Ensure That As Needs And Times Change, VUIOR Member Loan Programs Respond By Delivering Relevant Coverage And Service.",
      imgSrc: "/assets/memberbenefits4.png", // Replace with actual image path
      alt: "memberbenefits3",
    },
  ];

  // Conditionally remove the last benefit if isHouseHoldProgramPage is true
  const displayedBenefits = isHouseHoldProgramPage
    ? benefits.slice(0, -1)
    : benefits;

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
          {isHouseHoldProgramPage
            ? "Benefits of Our Program"
            : "Member Benefits"}
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
        {displayedBenefits.map((benefit, index) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={isHouseHoldProgramPage ? 4 : 3}
            key={index}
            sx={{ display: "flex" }} // Make grid item a flex container
          >
            <StepCard
              title={benefit.title}
              description={benefit.description}
              imgSrc={benefit.imgSrc}
              alt={benefit.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MemberBenefits;
