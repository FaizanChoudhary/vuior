import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StepCard from "../../components/StepCard";

// Main Component for "How to Join" Section
const HowToJoin = ({ steps }) => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        backgroundColor: "#EEF9F6",
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
          How to Join
        </Typography>
        <Box
          sx={{
            width: "90%",
            borderBottom: "3px solid #23AB84",
          }}
        />
      </Box>

      {/* Responsive Grid */}
      <Grid container spacing={4} mt={1}>
        {steps.map((step) => (
          <Grid item xs={12} md={4} key={step.number} sx={{ display: "flex" }}>
            <StepCard
              stepNumber={step.number}
              title={step.title}
              description={step.description}
              imgSrc={step.imgSrc}
              alt={step.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowToJoin;
