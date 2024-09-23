import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import StepCard from "../../components/StepCard";

const WhyChoose = () => {
  const benefits = [
    {
      number: "1",
      title: "Group Negotiated Discounts",
      description:
        "Through our strategic partnerships, we negotiate group discounts on your behalf, helping you save up to 25% on your household bills.",
      imgSrc: "/assets/choose1.png", // Update the image source accordingly
      alt: "choose1",
    },
    {
      number: "2",
      title: "Comprehensive Coverage",
      description:
        "We cover all types of household bills, including utilities, internet, phone, cable, insurance, and more. Our goal is to simplify your finances and reduce your monthly expenses.",
      imgSrc: "/assets/choose2.png",
      alt: "choose2",
    },
    {
      number: "3",
      title: "No Credit Check",
      description:
        "All credit backgrounds are welcomed. There are no credit checks required to join our program, making it accessible to everyone.",
      imgSrc: "/assets/choose3.png",
      alt: "choose3",
    },
    {
      number: "4",
      title: "Quick Approval",
      description:
        "Vuio streamlines the application process to deliver results quickly. Apply today and receive a decision in no time.",
      imgSrc: "/assets/choose4.png",
      alt: "choose4",
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
          Why Choose vuior?
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
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={4} lg={3} key={index} sx={{ display: "flex" }}>
            <StepCard
              stepNumber={benefit.number}
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

export default WhyChoose;
