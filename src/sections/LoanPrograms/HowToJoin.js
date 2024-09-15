import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

// Card component for each step
const StepCard = ({ number, title, description, imageSrc }) => {
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

// Main Component for "How to Join" Section
const HowToJoin = () => {
  const steps = [
    {
      number: 1,
      title: "Free Membership",
      description:
        "Joining vuior is free. Simply sign up to become a member and gain access to our loan programs and other valuable services.",
      imageSrc: "/assets/howtojoin1.png", // Replace with actual image path
    },
    {
      number: 2,
      title: "Minimum Account Balance",
      description:
        "To keep your membership active, maintain a minimum account balance of $25. This ensures continuous access to all vuior benefits and services.",
      imageSrc: "/assets/howtojoin2.png", // Replace with actual image path
    },
    {
      number: 3,
      title: "Apply For Loans",
      description:
        "Once you are a member, you can apply for any of our loan programs. Enjoy the benefits of flexible financing, no credit check, and competitive rates tailored to your needs.",
      imageSrc: "/assets/howtojoin3.png", // Replace with actual image path
    },
  ];

  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#EAF7F7" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#2E7D32",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        How to Join
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4}>
        {steps.map((step) => (
          <Grid item xs={12} sm={6} md={4} key={step.number}>
            <StepCard
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

export default HowToJoin;
