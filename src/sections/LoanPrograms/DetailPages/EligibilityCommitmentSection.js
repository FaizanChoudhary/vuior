// EligibilityCommitmentSection.js
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const EligibilityCommitmentSection = () => {
  return (
    <Grid container spacing={4} alignItems="center">
      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          //   src={"/assets/loan/travelloan2.png"}
          alt="Meeting with loan officer"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Grid>

      {/* Text Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" component="h3" gutterBottom>
          Eligibility Requirements
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Proof of income" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Proof of residence" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Minimum down payment (if applicable)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Travel itinerary (if applicable)" />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          Commitment To Members
        </Typography>
        <Typography variant="body1">
          Each loan is monitored by vuior and its member committees to ensure
          that as needs and times change, the Travel Loan Program responds by
          delivering innovative, relevant coverage and service that exceeds
          vuior members’ expectations.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EligibilityCommitmentSection;
