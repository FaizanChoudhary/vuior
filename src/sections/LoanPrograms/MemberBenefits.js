import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

// Card component for each benefit
const BenefitCard = ({ title, description, imageSrc }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px 8px 0 0",
          }}
        />
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#4A4A4A" }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const MemberBenefits = () => {
  const benefits = [
    {
      title: "Ownership And Community",
      description:
        "When You Become A Member Of Vuior, You Effectively Become A Part Owner. This Gives You A Voice In Our Organization And A Stake In Our Collective Success.",
      imageSrc: "/assets/memberbenefits1.png", // Replace with actual image path
    },
    {
      title: "Commitment To Diversity, Equity, And Inclusion",
      description:
        "Vuior Is Dedicated To Fostering A Diverse, Equitable, And Inclusive Environment. We Believe That Embracing Diversity Strengthens Our Community And Enhances Our Ability To Serve All Members Effectively.",
      imageSrc: "/assets/memberbenefits2.png", // Replace with actual image path
    },
    {
      title: "Customer-Focused Model",
      description:
        "Our Approach Prioritizes Your Needs. We Offer Personalized Support And Services Aimed At Building Lifelong Relationships And Fostering A Supportive Community.",
      imageSrc: "/assets/memberbenefits3.png", // Replace with actual image path
    },
    {
      title: "Continuous Improvement",
      description:
        "Each Loan Plan Is Monitored By Vuior And Its Member Committees To Ensure That As Needs And Times Change, Vuior Member Loan Programs Respond By Delivering Relevant Coverage And Service.",
      imageSrc: "/assets/memberbenefits4.png", // Replace with actual image path
    },
  ];

  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#EEF9F6" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#064E3B",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        Member Benefits
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BenefitCard
              title={benefit.title}
              description={benefit.description}
              imageSrc={benefit.imageSrc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MemberBenefits;
