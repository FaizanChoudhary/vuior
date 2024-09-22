import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Grid,
} from "@mui/material";

// Loan Offer Card Component
const LoanOfferCard = ({ title, description, iconSrc }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        padding: 2,
        textAlign: "left",
        width: "100%",
        backgroundColor: "#F9F9F9", // Light background
        display: "flex",
        flexDirection: "column", // Aligns content in column
        justifyContent: "space-between", // Push the button to the bottom
        minHeight: { xs: "auto", md: 350, lg: 400 }, // Optional, to enforce a minimum height for larger screens
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Loan Icon */}
        <Box
          component="img"
          src={iconSrc}
          alt={title}
          sx={{
            width: 60,
            height: 60,
            marginBottom: 2,
            borderRadius: "50%", // Make the icon circular
            backgroundColor: "#EAEAEA", // Background color for the icon
            padding: 1,
          }}
        />

        {/* Loan Title */}
        <Typography variant="h5" sx={{ fontWeight: "600", marginBottom: 1 }}>
          {title}
        </Typography>

        {/* Loan Description as a list */}
        <List>
          {description.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                paddingLeft: 0,
                display: "list-item",
                color: "#4A4A4A",
                marginBottom: 1,
              }} // Add margin for spacing
            >
              {item}
            </ListItem>
          ))}
        </List>
      </CardContent>

      {/* View Details Button */}
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            background: "linear-gradient(90deg, #064E3B 0%, #23AB84 100%)",
            paddingX: 4,
            paddingY: 1,
            borderRadius: "20px",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(90deg, #23AB84 0%, #064E3B 100%)",
            },
          }}
        >
          View Details →
        </Button>
      </Box>
    </Card>
  );
};

// Main Component for Loan Program Offers Section
const LoanProgramOffers = () => {
  const loanOffers = [
    {
      title: "Auto Loans",
      description: [
        "Competitive rates for new and used vehicles",
        "Flexible repayment terms",
      ],
      iconSrc: "/assets/icons/autoloan.png", // Replace with actual image path
    },
    {
      title: "Mortgage Loans",
      description: [
        "Home purchase and refinancing options",
        "Attractive interest rates and terms",
      ],
      iconSrc: "/assets/icons/mortageloan.png", // Replace with actual image path
    },
    {
      title: "Personal Loans",
      description: [
        "For a variety of personal expenses, including debt consolidation",
        "No collateral required",
      ],
      iconSrc: "/assets/icons/personelloan.png", // Replace with actual image path
    },
    {
      title: "Student Loans",
      description: [
        "Funding for education expenses",
        "Competitive rates and flexible repayment options",
      ],
      iconSrc: "/assets/icons/studentloan.png", // Replace with actual image path
    },
    {
      title: "Travel Loans",
      description: [
        "Financing for your dream vacation",
        "Easy application process",
      ],
      iconSrc: "/assets/icons/travelloan.png", // Replace with actual image path
    },
    {
      title: "Special Event Loan",
      description: [
        "Cover expenses for your special day",
        "Flexible terms and attractive rates",
      ],
      iconSrc: "/assets/icons/weddingloan.png", // Replace with actual image path
    },
    {
      title: "Home Improvement Loans",
      description: [
        "Finance renovations and home repairs",
        "Tailored repayment plans",
      ],
      iconSrc: "/assets/icons/homeloan.png", // Replace with actual image path
    },
    {
      title: "Small Business Loans",
      description: [
        "Support for starting or expanding your business",
        "Flexible financing options",
      ],
      iconSrc: "/assets/icons/bussinessloan.png", // Replace with actual image path
    },
    {
      title: "Emergency Loans",
      description: ["Quick access to funds for emergencies", "Fast approval"],
      iconSrc: "/assets/icons/emergencyloan.png", // Replace with actual image path
    },
    {
      title: "Health Care Loans",
      description: [
        "Cover medical expenses and treatments",
        "Manageable repayment terms",
      ],
      iconSrc: "/assets/icons/healthcareloan.png", // Replace with actual image path
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box data-aos="fade-up">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={30}
        >
          Loan Program Offers
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      {/* Grid Component for Loan Offers */}
      {/* Grid Component for Loan Offers */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
        {loanOffers.map((offer, index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={4}
            lg={3}
            data-aos="zoom-in"
            sx={{
              display: "flex", // Ensures that all Grid items stretch to equal height
            }}
          >
            <LoanOfferCard
              title={offer.title}
              description={offer.description}
              iconSrc={offer.iconSrc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LoanProgramOffers;
