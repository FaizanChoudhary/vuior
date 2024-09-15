import React from "react";
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Custom Card Component
const BenefitCard = ({ iconSrc, title, description, benefits }) => (
  <Box
    sx={{
      padding: 3,
      boxShadow: 3,
      borderRadius: "16px",
      backgroundColor: "#fff",
      textAlign: "left",
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
      <Box
        component="img"
        src={iconSrc}
        alt={title}
        sx={{ width: 56, height: 56 }}
      />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ marginBottom: 2 }}>
      {description}
    </Typography>
    <List>
      {benefits.map((benefit, index) => (
        <ListItem key={index} disableGutters>
          <ListItemIcon>
            <CheckCircleIcon sx={{ color: "#064E3B", fontSize: 20 }} />
          </ListItemIcon>
          <ListItemText primary={benefit} />
        </ListItem>
      ))}
    </List>
  </Box>
);

// Main Component for Why Join Vuoir Section
const WhyJoinVuoir = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: "#EEF9F6" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 4 }}
      >
        Why Join Vuoir?
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={4}>
        {/* Card 1: Fully Remote Positions */}
        <Grid item xs={12} md={4}>
          <BenefitCard
            iconSrc="/assets/icons/remote.png" // Replace with actual path to the icon
            title="Fully Remote Positions"
            description="Enjoy the freedom of working from anywhere while contributing to vuoir’s success."
            benefits={[
              "Reduced Commute",
              "Cost Savings",
              "Global Talent Pool",
              "Job Satisfaction",
              "Increased Productivity",
            ]}
          />
        </Grid>

        {/* Card 2: Competitive Salaries */}
        <Grid item xs={12} md={4}>
          <BenefitCard
            iconSrc="/assets/icons/competitive.png" // Replace with actual path to the icon
            title="Competitive Salaries"
            description="Unlock your unlimited earning potential with competitive commissions and bonuses."
            benefits={[
              "Increased Financial Security",
              "Debt Reduction",
              "Reduced Stress And Anxiety",
              "Ability To Invest",
              "Spending Power",
            ]}
          />
        </Grid>

        {/* Card 3: Comprehensive Benefits */}
        <Grid item xs={12} md={4}>
          <BenefitCard
            iconSrc="/assets/icons/comprehensive.svg" // Replace with actual path to the icon
            title="Comprehensive Benefits"
            description="Vuoir offers comprehensive benefits, including debt management plans to help you regain control of your finances."
            benefits={[
              "Lower Monthly Payments",
              "Reduced Interest Rates",
              "Waived Fees And Penalties",
              "Debt Consolidation",
              "Legal Protection",
            ]}
          />
        </Grid>

        {/* Card 4: Professional Development Opportunities */}
        <Grid item xs={12} md={6}>
          <BenefitCard
            iconSrc="/assets/icons/professional.png" // Replace with actual path to the icon
            title="Professional Development Opportunities"
            description="Our specialists stay up to date on industry standards and laws by their participation in our professional development programs."
            benefits={[
              "Increased Efficiency",
              "Career Advancement",
              "Boosted Confidence",
              "Improved Client Outcomes",
              "Job Satisfaction",
            ]}
          />
        </Grid>

        {/* Card 5: Inclusive and Supportive Work Environment */}
        <Grid item xs={12} md={6}>
          <BenefitCard
            iconSrc="/assets/icons/inclusive.png" // Replace with actual path to the icon
            title="Inclusive And Supportive Work Environment"
            description="Vuoir program creates a cooperative and welcoming work climate where each team member's talents are recognized."
            benefits={[
              "Increased Productivity",
              "Enhanced Reputation",
              "Reduced Conflict",
              "Work-Life Balance",
              "Increased Morale",
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyJoinVuoir;
