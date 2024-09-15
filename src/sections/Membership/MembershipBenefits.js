import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

// Custom Card Component for Membership Benefits
const BenefitCard = ({ iconSrc, title, description }) => (
  <Card sx={{ boxShadow: 3, padding: 2, borderRadius: "16px", height: "100%" }}>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Avatar
        src={iconSrc}
        alt={title}
        sx={{
          width: 56,
          height: 56,
          marginBottom: 2,
          backgroundColor: "#064E3B",
        }}
      />
      <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

// Main Component - Membership Benefits Section
const MembershipBenefits = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: "#f9f9f9" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4, fontWeight: "bold", color: "#064E3B" }}
      >
        Membership Benefits
      </Typography>

      {/* Grid Layout for Benefit Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <BenefitCard
            iconSrc="/assets/icons/freeJoin.png" // Replace with the actual icon path
            title="Free To Join"
            description="Becoming a member of vuoir is free. Simply sign up and fund your account with a minimum balance of $25 to keep your membership active."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <BenefitCard
            iconSrc="/assets/icons/exclusive.png" // Replace with the actual icon path
            title="Exclusive Access"
            description="Enjoy access to all of vuoir’s programs and services, including our household bill consolidation program and a variety of loan options."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <BenefitCard
            iconSrc="/assets/icons/financial.png" // Replace with the actual icon path
            title="Financial Well-Being"
            description="Our services are designed to support your financial health, offering competitive rates, flexible terms, and personalized financial guidance."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <BenefitCard
            iconSrc="/assets/icons/community.png" // Replace with the actual icon path
            title="Community Building"
            description="Engage with a network of like-minded individuals and professionals. Participate in community events, workshops, and forums designed to foster collaboration and support."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MembershipBenefits;
