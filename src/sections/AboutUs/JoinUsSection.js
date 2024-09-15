import React from "react";
import { Grid, Typography, Box } from "@mui/material";

// Step Component to display each step with its number and description
const Step = ({ number, title, description }) => (
  <Box sx={{ display: "flex", alignItems: "flex-start", marginBottom: 4 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#064E3B",
        color: "#fff",
        borderRadius: "50%",
        minWidth: 50,
        minHeight: 50,
        fontSize: 24,
        fontWeight: "bold",
        marginRight: 3,
      }}
    >
      {number}
    </Box>
    <Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 1 }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  </Box>
);

// Main Component for "Join Us" Section
const JoinUsSection = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Steps */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 4 }}
          >
            Join Us
          </Typography>

          {/* Step 1 */}
          <Step
            number="1"
            title="Free Membership"
            description="Joining vuoir is free. Simply sign up to become a member and gain access to our household bill consolidation program and loan program. Enjoy the benefits of simplified bill management, group-negotiated discounts, and a variety of loan options tailored to your needs."
          />

          {/* Step 2 */}
          <Step
            number="2"
            title="Minimum Account Balance"
            description="To keep your membership active, maintain a minimum account balance of $25. This ensures continuous access to all vuoir benefits and services."
          />

          {/* Step 3 */}
          <Step
            number="3"
            title="Building a Community"
            description="At vuoir, we believe in building a strong, supportive community. Our programs are designed not just to meet your financial needs, but to foster a sense of belonging and ownership."
          />
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/join_us.png" // Replace with actual image path
            alt="Join Us"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinUsSection;
