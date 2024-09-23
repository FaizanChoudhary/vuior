import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  marginTop: "60px",
  padding: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f9f9f9", // Light background for contrast
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  overflow: "hidden", // Ensures image stays within rounded corners
}));

const BulletPoint = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const EligibilityCommitmentSection = ({ data }) => {
  return (
    <SectionContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <ImageContainer>
            <Box
              component="img"
              src={data.eligibiltyImage}
              alt="Eligibility"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "700px", // Prevents image from growing too tall
              }}
            />
          </ImageContainer>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box data-aos="fade-up" sx={{ marginBottom: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              fontSize={{ xs: 24, md: 30 }}
            >
              Eligibility Requirements
            </Typography>
            <Box
              sx={{
                width: "35%",
                borderBottom: "3px solid #23AB84",
                margin: "0",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1, // Spacing between items
              my: 2, // Margin around the list
            }}
          >
            {data.eligibilityRequirements.map((eligibility, index) => (
              <BulletPoint key={index}>
                <span style={{ marginRight: "0.5em", color: "#23AB84" }}>
                  •
                </span>
                <Typography variant="body1">{eligibility}</Typography>
              </BulletPoint>
            ))}
          </Box>
          <Box data-aos="fade-up" sx={{ marginBottom: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              fontSize={{ xs: 24, md: 30 }}
            >
              Commitment To Members
            </Typography>
            <Box
              sx={{
                width: "40%",
                borderBottom: "3px solid #23AB84",
                margin: "0",
              }}
            />
          </Box>
          <Typography variant="body1">{data.commitmentDescription}</Typography>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default EligibilityCommitmentSection;
