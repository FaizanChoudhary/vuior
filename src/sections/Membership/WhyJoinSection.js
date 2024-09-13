import React from "react";
import { Grid, Typography, Box, Card, CardContent } from "@mui/material";

// Custom Card Component to display each section's content
const InfoCard = ({ imageSrc, title, description }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      boxShadow: 3,
      marginBottom: 4,
      borderRadius: "16px",
    }}
  >
    <Box
      component="img"
      src={imageSrc}
      alt={title}
      sx={{
        width: { xs: "100%", md: "50%" },
        height: "auto",
        objectFit: "cover",
        borderRadius: { xs: "16px 16px 0 0", md: "16px 0 0 16px" },
      }}
    />
    <CardContent
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
);

// Main Component - Why Join Section
const WhyJoinSection = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: "#f9f9f9" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4, fontWeight: "bold", color: "#2E7D32" }}
      >
        Why Join Vuoir?
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={4}>
        {/* Ownership And Community Section */}
        <Grid item xs={12}>
          <InfoCard
            imageSrc="/assets/join_section_image.png" // Correct image path
            title="Ownership And Community"
            description="As a member of vuoir, you are not just a customer; you are a co-owner. This means you have a voice in how our organization operates and a stake in our success. We are committed to building a supportive community where every member can achieve their financial goals."
          />
        </Grid>

        {/* Customer-Focused Model Section */}
        <Grid item xs={12}>
          <InfoCard
            imageSrc="/assets/join_section_image.png" // Correct image path
            title="Customer-Focused Model"
            description="Our approach is centered around you, the member. We prioritize your needs, offering personalized support and fostering lifelong relationships. Whether it's through our loan programs, household bill consolidation services, or financial planning resources, we are here to help you succeed."
          />
        </Grid>

        {/* New Diversity, Equity, and Inclusion Card */}

        <Grid item xs={12}>
          <InfoCard
            imageSrc="/assets/join_section_image.png" // Correct image path for this new card
            title="Diversity, Equity, And Inclusion"
            description="Vuoir is dedicated to creating a diverse, equitable, and inclusive environment. We believe that diversity strengthens our community and drives innovation. Our commitment to DEI ensures that all members feel valued and respected, with equal access to our programs and opportunities."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyJoinSection;
