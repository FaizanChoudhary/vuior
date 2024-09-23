// CommunityMembershipSection.js
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CommunityMembershipSection = () => {
  return (
    <Grid container spacing={4} alignItems="center">
      {/* Text Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" component="h2" gutterBottom>
          Take control of your financial future with Vuior’s Personal Loan
          Program. Apply now to get started!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Joining vuior is free and gives you access to our Travel Loan Program.
          Our community supports your travel aspirations by providing financial
          assistance and exclusive member benefits. Our commitment to diversity,
          equity, and inclusion ensures all members feel welcomed and supported.
        </Typography>
      </Grid>

      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          //   src={"/assets/loan/travelloan3.png"}
          alt="Community Meeting"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Grid>
    </Grid>
  );
};

export default CommunityMembershipSection;
