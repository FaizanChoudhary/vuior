import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Contact Info Item with hover effect and icon styling
const ContactInfoItem = ({ iconSrc, label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      padding: 2,
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
      },
      marginBottom: 3,
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: 70,
        height: 70,
        marginRight: 2,
        padding: 1,
      }}
    >
      <Box
        component="img"
        src={iconSrc}
        alt={label}
        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
    <Box>
      <Typography variant="body1" sx={{ fontWeight: "bold", color: "#064E3B" }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: "#6B7280" }}>
        {value}
      </Typography>
    </Box>
  </Box>
);

// Glassmorphism style box for the form
const GlassBox = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(20px)", // Increased blur for glassmorphism effect
  background: "rgba(255, 255, 255, 0.2)", // More transparency
  borderRadius: "16px",
  padding: theme.spacing(4),
  boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      border: "none", // Remove the border
    },
    "&:hover fieldset": {
      border: "none", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove the border when focused
    },
  },
}));

// Main Component for Inquiry and Support Section
const InquirySupportSection = () => {
  return (
    <Box
      sx={{
        // padding: { xs: 4, md: 6 },
        backgroundImage: 'url("/assets/contact-us.jpg")', // Add your background image path
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center",
        position: "relative",
        marginTop: "70px !important",
        px: { xs: 4, md: 6, lg: 20 },
        py: 5,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
      {/* Section Title */}
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 24, md: 30 }}
          sx={{ color: "#fff" }} // Text color is white for better visibility
        >
          Inquiry and Support
        </Typography>
        <Box
          sx={{
            width: "90%",
            height: "4px",
            backgroundColor: "#23AB84",
          }}
        />
      </Box>

      <Grid data-aos="fade-up" container spacing={4} alignItems="flex-start">
        {/* Left Section - Contact Information */}
        <Grid item xs={12} md={5}>
          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#fff", fontSize: { xs: 18, md: 24 } }} // White text for contrast
            >
              Contact Information
            </Typography>
            <Box
              sx={{
                width: "50%",
                height: "4px",
                backgroundColor: "#23AB84",
              }}
            />
          </Box>

          <ContactInfoItem
            iconSrc="/assets/icons/phone.png"
            label="Phone Number"
            value="(833) 569-3941"
          />

          <ContactInfoItem
            iconSrc="/assets/icons/email.png"
            label="Email"
            value="info@vuoir.com"
          />

          <ContactInfoItem
            iconSrc="/assets/icons/time.png"
            label="Business Hours"
            value="Monday – Saturday, 10 AM – 5 PM"
          />
        </Grid>

        {/* Right Section - Inquiry Form */}
        <Grid item xs={12} md={7}>
          <GlassBox>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{ mb: 3, color: "#fff" }}
            >
              Have Any Questions?
            </Typography>
            <form>
              <Grid container spacing={3} alignItems="center">
                {/* Full Name */}
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Full Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Phone Number
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your phone"
                    sx={{ backgroundColor: "#fff", borderRadius: "12px" }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    sx={{ backgroundColor: "#fff", borderRadius: "12px" }}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Your Message
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <StyledTextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Enter your message"
                    sx={{ backgroundColor: "#fff", borderRadius: "12px" }}
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#064E3B",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.2s ease",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </GlassBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InquirySupportSection;
