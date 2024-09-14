import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Loan Offer Card Component
const LoanOfferCard = ({ title, description, iconSrc }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        padding: 2,
        textAlign: "left",
        backgroundColor: "#FFFFFF",
        maxWidth: 320, // Ensure card size consistency
        margin: "auto",
      }}
    >
      <CardContent>
        {/* Loan Icon */}
        <Box
          component="img"
          src={iconSrc}
          alt={title}
          sx={{
            width: 50,
            height: 50,
            marginBottom: 2,
          }}
        />

        {/* Loan Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {title}
        </Typography>

        {/* Loan Description as a list */}
        <List>
          {description.map((item, index) => (
            <ListItem
              key={index}
              sx={{ paddingLeft: 0, display: "list-item", color: "#4A4A4A" }}
            >
              {item}
            </ListItem>
          ))}
        </List>

        {/* View Details Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#2E7D32",
            paddingX: 4,
            paddingY: 1,
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          View Details →
        </Button>
      </CardContent>
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
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#2E7D32",
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        Loan Program Offers
      </Typography>

      {/* Swiper Component for Horizontal Scroll with Pagination */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        modules={[Pagination]} // Importing and using Pagination module
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
      >
        {loanOffers.map((offer, index) => (
          <SwiperSlide key={index}>
            <LoanOfferCard
              title={offer.title}
              description={offer.description}
              iconSrc={offer.iconSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LoanProgramOffers;
