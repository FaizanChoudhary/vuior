import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const WhyChooseCard = ({ number, title, description, imageSrc }) => {
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
            backgroundColor: "#064E3B",
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

const WhyChoose = () => {
  const benefits = [
    {
      number: "1",
      title: "Group Negotiated Discounts",
      description:
        "Through our strategic partnerships, we negotiate group discounts on your behalf, helping you save up to 25% on your household bills.",
      imageSrc: "/assets/choose1.png", // Update the image source accordingly
    },
    {
      number: "2",
      title: "Comprehensive Coverage",
      description:
        "We cover all types of household bills, including utilities, internet, phone, cable, insurance, and more. Our goal is to simplify your finances and reduce your monthly expenses.",
      imageSrc: "/assets/choose2.png",
    },
    {
      number: "3",
      title: "No Credit Check",
      description:
        "All credit backgrounds are welcomed. There are no credit checks required to join our program, making it accessible to everyone.",
      imageSrc: "/assets/choose3.png",
    },
    {
      number: "4",
      title: "Membership Requirement",
      description:
        "Anyone can apply for our household bill consolidation program. Membership is free, but maintaining an account balance of $25 is required to keep your membership active.",
      imageSrc: "/assets/choose4.png",
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
        Why Choose vuior?
      </Typography>

      {/* Responsive Grid */}
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <WhyChooseCard
              number={benefit.number}
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

export default WhyChoose;
