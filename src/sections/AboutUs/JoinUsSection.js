import React from "react";
import { Grid, Typography, Box } from "@mui/material";

// Step Component to display each step with its number, title, and description
const Step = ({ number, title, description, isLast }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      marginBottom: isLast ? 0 : 10,
      position: "relative",
    }}
  >
    {/* Number Circle */}
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
        zIndex: 1,
      }}
    >
      {number}
    </Box>

    {/* Line connecting the steps */}
    {!isLast && (
      <Box
        sx={{
          position: "absolute",
          left: 23, // Center the line under the number circle
          top: 50, // Start after the circle
          width: "4px",
          height: "calc(100% + 30px)", // Extend the line to connect to the next step
          backgroundColor: "#064E3B",
          zIndex: 0,
        }}
      />
    )}

    {/* Step Content */}
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 4, md: 6 },
        backgroundColor: "#fff",
      }}
    >
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 24, md: 30 }}
        >
          Join Us
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
            margin: "0",
          }}
        />
      </Box>
      <Grid container spacing={4} data-aos="fade-up">
        {/* Left Section - Steps */}
        <Grid item xs={12} md={7}>
          {/* Step 1 */}
          <Step
            number="1"
            title="Free Membership"
            description="Joining VUIOR is free. Simply sign up to become a member and gain access to our household bill consolidation program and loan program. Enjoy the benefits of simplified bill management, group-negotiated discounts, and a variety of loan options tailored to your needs."
          />

          {/* Step 2 */}
          <Step
            number="2"
            title="Minimum Account Balance"
            description="To keep your membership active, maintain a minimum account balance of $25. This ensures continuous access to all VUIOR benefits and services."
          />

          {/* Step 3 */}
          <Step
            number="3"
            title="Building a Community"
            description="At VUIOR, we believe in building a strong, supportive community. Our programs are designed not just to meet your financial needs, but to foster a sense of belonging and ownership. We are dedicated to creating a community where every member feels valued, supported, and empowered to achieve their financial goals.Join VUIOR today and experience the difference of a member-owned, customer-focused financial services provider committed to your success."
            isLast
          />
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/assets/call-image.png" // Replace with actual image path
            alt="Join Us"
            sx={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: 3,
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinUsSection;
