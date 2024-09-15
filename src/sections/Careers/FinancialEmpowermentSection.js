import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const FinancialEmpowermentSection = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/join_empowerment.png" // Replace with actual path to the image
            alt="Financial Empowerment"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Right Section - Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 2 }}
          >
            Join Us In Driving The Financial Empowerment Revolution Forward
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 3, color: "#333" }}>
            Participate in a revolutionary movement aimed at improving financial
            stability, independence, and literacy for people and communities,
            and help us propel the financial empowerment revolution forward. Our
            goal is to provide individuals with the information, assets, and
            instruments necessary to take charge of their financial destiny. You
            will be actively involved in campaigns that support prudent
            financial management, debt reduction, and wealth-building techniques
            by working with us. Altogether, we can eliminate obstacles to
            monetary achievement and establish a fairer and thriving community.
            Your assistance will enable others to attain long-term financial
            security and freedom, having a genuine and long-lasting effect on
            countless lives.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancialEmpowermentSection;
