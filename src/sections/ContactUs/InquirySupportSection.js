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
        width: 50,
        height: 50,
        marginRight: 2,
        backgroundColor: "#23AB84",
        padding: 1,
      }}
    >
      <Box
        component="img"
        src={iconSrc}
        alt={label}
        sx={{ width: "70%", height: "70%", objectFit: "contain" }}
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
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  padding: theme.spacing(4),
  boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

// Main Component for Inquiry and Support Section
const InquirySupportSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        background: "linear-gradient(135deg, #F3F4F6 30%, #E0F2F1 100%)",
        marginTop: "70px !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box data-aos="fade-up" sx={{ marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          fontSize={{ xs: 28, md: 34 }}
          sx={{ color: "#064E3B", mb: 1 }}
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

      <Grid container spacing={4} alignItems="flex-start" data-aos="fade-up">
        {/* Left Section - Contact Information */}
        <Grid item xs={12} md={5}>
          <Box data-aos="fade-up" sx={{ marginBottom: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#064E3B", fontSize: { xs: 22, md: 26 }, mb: 1 }}
            >
              Contact Information
            </Typography>
            <Box
              sx={{
                width: "30%",
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
              sx={{ mb: 3, color: "#064E3B" }}
            >
              Have Any Questions?
            </Typography>
            <form>
              <Grid container spacing={3} alignItems="center">
                {/* Full Name */}
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#064E3B" }}
                  >
                    Full Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                    sx={{ backgroundColor: "#fff", borderRadius: "12px" }}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#064E3B" }}
                  >
                    Phone Number
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
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
                    sx={{ fontWeight: "bold", color: "#064E3B" }}
                  >
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
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
                    sx={{ fontWeight: "bold", color: "#064E3B" }}
                  >
                    Your Message
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
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
                    backgroundColor: "#23AB84",
                    paddingX: 4,
                    paddingY: 1.5,
                    borderRadius: "20px",
                    fontWeight: "bold",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#064E3B",
                      transform: "translateY(-3px)",
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
