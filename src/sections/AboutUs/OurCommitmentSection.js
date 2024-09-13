import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// Custom Card Component
const CommitmentCard = ({ imageSrc, title, description }) => (
  <Card sx={{ boxShadow: 3, borderRadius: "16px", overflow: "hidden" }}>
    <CardMedia
      component="img"
      height="200"
      image={imageSrc}
      alt={title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent sx={{ textAlign: "center", padding: 3 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#2E7D32", marginBottom: 2 }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

// Main Component for the "Our Commitment" Section
const OurCommitmentSection = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ fontWeight: "bold", color: "#2E7D32", marginBottom: 4 }}
      >
        Our Commitment
      </Typography>

      {/* Grid Layout for Commitment Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <CommitmentCard
            imageSrc="/assets/member.png" // Replace with the correct image path
            title="Member-Owned Model"
            description="When you become a member of Vuoir, you effectively become a part owner. This unique model ensures that our members have a voice in the organization and a stake in our collective success."
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CommitmentCard
            imageSrc="/assets/diversity.png" // Replace with the correct image path
            title="Diversity, Equity, And Inclusion"
            description="Vuoir is committed to fostering a diverse, equitable, and inclusive environment. We believe that embracing diversity strengthens our community and enhances our ability to serve all members effectively."
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CommitmentCard
            imageSrc="/assets/customer.png" // Replace with the correct image path
            title="Customer-Focused Approach"
            description="At Vuoir, our members are at the heart of everything we do. We focus on understanding and meeting your needs, creating lifelong relationships, and building a supportive community."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurCommitmentSection;
