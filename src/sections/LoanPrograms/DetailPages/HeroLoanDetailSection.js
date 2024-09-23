import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const HeroLoanDetailSection = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom>
          Travel Loan Program
        </Typography>
      </Grid>
      {/* Text Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          About Program
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our Travel Loan Program helps you finance your dream vacation or
          essential travel needs. Whether it’s a family trip, a honeymoon, or a
          necessary journey, vuior makes it financially feasible.
        </Typography>
        <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
          Program Highlights
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Flexible Loan Amounts"
              secondary="Borrow what you need for your travel plans."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Competitive Rates"
              secondary="Low interest rates to make travel affordable."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Quick Approval"
              secondary="Fast processing to get you on your way without delay."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Flexible Repayment"
              secondary="Choose repayment terms that fit your budget."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="In-House and Special Financing"
              secondary="vuior offers both in-house financing and special financing options to provide additional flexibility and support."
            />
          </ListItem>
        </List>
      </Grid>

      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          // src={"/assets/loan/travelloan1.png"}
          alt="Family with travel documents"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroLoanDetailSection;
