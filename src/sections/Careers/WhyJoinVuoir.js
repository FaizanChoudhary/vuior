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
// import { styled } from "@mui/system";

// Custom Card Component
const BenefitCard = ({ iconSrc, title, description, benefits }) => (
  <Box
    sx={{
      padding: 3,
      boxShadow: 3,
      borderRadius: "16px",
      backgroundColor: "#fff",
      textAlign: "left",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      minHeight: 500,
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
      },
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
            <CheckCircleIcon sx={{ color: "#23AB84", fontSize: 20 }} />
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
    <Box
      sx={{
        padding: { xs: 3, md: 6 },
        backgroundColor: "#EEF9F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 24, md: 30 }}
          sx={{ marginBottom: 1 }}
        >
          Why Join Vuoir?
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
            margin: "0",
          }}
        />
      </Box>

      {/* Grid Layout for Cards */}
      <Grid container spacing={4} mt={2}>
        {[
          {
            iconSrc: "/assets/icons/remote.png",
            title: "Fully Remote Positions",
            description:
              "Enjoy the freedom of working from anywhere while contributing to Vuoir’s success.",
            benefits: [
              "Reduced Commute",
              "Cost Savings",
              "Global Talent Pool",
              "Job Satisfaction",
              "Increased Productivity",
            ],
          },
          {
            iconSrc: "/assets/icons/competitive.png",
            title: "Competitive Salaries",
            description:
              "Unlock your unlimited earning potential with competitive commissions and bonuses.",
            benefits: [
              "Increased Financial Security",
              "Debt Reduction",
              "Reduced Stress And Anxiety",
              "Ability To Invest",
              "Spending Power",
            ],
          },
          {
            iconSrc: "/assets/icons/comprehensive.svg",
            title: "Comprehensive Benefits",
            description:
              "Vuoir offers comprehensive benefits, including debt management plans to help you regain control of your finances.",
            benefits: [
              "Lower Monthly Payments",
              "Reduced Interest Rates",
              "Waived Fees And Penalties",
              "Debt Consolidation",
              "Legal Protection",
            ],
          },
          {
            iconSrc: "/assets/icons/professional.png",
            title: "Professional Development Opportunities",
            description:
              "Our specialists stay up to date on industry standards and laws by their participation in our professional development programs.",
            benefits: [
              "Increased Efficiency",
              "Career Advancement",
              "Boosted Confidence",
              "Improved Client Outcomes",
              "Job Satisfaction",
            ],
          },
          {
            iconSrc: "/assets/icons/inclusive.png",
            title: "Inclusive And Supportive Work Environment",
            description:
              "Vuoir program creates a cooperative and welcoming work climate where each team member's talents are recognized.",
            benefits: [
              "Increased Productivity",
              "Enhanced Reputation",
              "Reduced Conflict",
              "Work-Life Balance",
              "Increased Morale",
            ],
          },
        ].map((benefit, index) => (
          <Grid
            item
            xs={12}
            md={index < 3 ? 4 : 6}
            key={index}
            data-aos="zoom-in"
          >
            <BenefitCard
              iconSrc={benefit.iconSrc}
              title={benefit.title}
              description={benefit.description}
              benefits={benefit.benefits}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyJoinVuoir;
