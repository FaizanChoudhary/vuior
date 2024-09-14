import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const HowItWorksCard = ({ number, title, description, imageSrc }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        height: "100%",
        position: "relative", // Enable relative positioning
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* Step Image */}
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

        {/* Step Number - Positioned at the bottom and overlapping the image */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-20px", // Adjust this to overlap with the image
            left: "50%",
            transform: "translateX(-50%)",
            width: "50px",
            height: "50px",
            backgroundColor: "#2E7D32",
            color: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            zIndex: 1, // Ensure it's on top of the image
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {number}
        </Box>
      </Box>

      <CardContent sx={{ marginTop: 4 }}>
        {/* Step Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {title}
        </Typography>

        {/* Step Description */}
        <Typography variant="body2" sx={{ color: "#4A4A4A" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "No Credit Check",
      description:
        "We welcome applicants from all credit backgrounds. Our loans do not require a credit check, making it easier for everyone to access the funds they need.",
      imageSrc: "/assets/loanworks1.png",
    },
    {
      number: "2",
      title: "In-House And Special Financing",
      description:
        "vuior offers both in-house financing and special financing options to provide additional flexibility and support.",
      imageSrc: "/assets/loanworks2.png",
    },
    {
      number: "3",
      title: "Membership Requirement",
      description:
        "While anyone can apply for our loans, becoming a vuior member is necessary to take full advantage of our programs. Membership is free to join, and maintaining an account balance of $25 ensures continuous access to all benefits.",
      imageSrc: "/assets/loanworks3.png",
    },
  ];

  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#F7F7F7" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#2E7D32",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        How It Works
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HowItWorksCard
              number={step.number}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
