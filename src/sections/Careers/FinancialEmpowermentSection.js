import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Container with a two-tone background
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/assets/new/join-team.jpg")', // Add your background image path
  backgroundSize: "cover", // Ensures the image covers the entire section
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  overflow: "hidden",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    minHeight: "800px",
  },
}));

const OverlayTextBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: theme.spacing(2), // Adjust padding for mobile
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "16px",
  boxShadow: theme.shadows[5],
  textAlign: "center",
  zIndex: 1,
  backdropFilter: "blur(10px)",

  // Responsive styles
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2), // Reduce padding on small screens
    width: "90%", // Set a responsive width to prevent overflow
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
    maxWidth: "80%", // Fine-tune maxWidth for medium screens
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(5),
    maxWidth: "60%", // Fine-tune maxWidth for larger screens
  },
}));

const FinancialEmpowermentSection = () => {
  return (
    <SectionContainer>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay for contrast
          zIndex: -1,
        }}
      />
      <Grid container>
        {/* Text Section */}
        <Grid item xs={12} data-aos="zoom-in">
          <OverlayTextBox>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "bold", color: "#064E3B" }}
            >
              Join Our Team
            </Typography>

            {/* <Typography variant="body2" sx={{ marginBottom: 2, color: "#333" }}>
              Call ((833) 569-3941) to explore open positions
            </Typography> */}
            <Typography
              variant="body1"
              sx={{
                marginBottom: { sm: 2 },
                color: "#333",
                fontSize: 20,
                mt: 2,
              }}
            >
              Call ((833) 569-3941) to explore open positions
            </Typography>
          </OverlayTextBox>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default FinancialEmpowermentSection;
