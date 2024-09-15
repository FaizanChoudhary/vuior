import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

// Contact Info Item Component with custom icons
const ContactInfoItem = ({ iconSrc, label, value }) => (
  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: 40,
        height: 40,
        marginRight: 2,
        backgroundColor: "#e0e0e0",
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
      <Typography variant="body2">{value}</Typography>
    </Box>
  </Box>
);

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f8f4", // Light green background
  padding: theme.spacing(4),
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "auto",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

// Main Component for Inquiry and Support Section
const InquirySupportSection = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Section - Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 4 }}
          >
            Contact Information
          </Typography>

          <ContactInfoItem
            iconSrc="/assets/icons/phone.png" // Replace with actual image path
            label="Phone Number"
            value="(833) 569-3941"
          />

          <ContactInfoItem
            iconSrc="/assets/icons/email.png" // Replace with actual image path
            label="Email"
            value="info@vuoir.com"
          />

          <ContactInfoItem
            iconSrc="/assets/icons/time.png" // Replace with actual image path
            label="Business Hours"
            value="Monday – Saturday, 10 AM – 5 PM"
          />
        </Grid>

        {/* Right Section - Inquiry Form */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 4 }}
          >
            Inquiry and Support
          </Typography>

          <StyledBox>
            <Typography variant="h5" gutterBottom align="center">
              Have Any Questions?
            </Typography>
            {/* Form Fields with Labels */}
            <form>
              <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{ marginBottom: 3 }}
              >
                {/* Full Name */}
                <Grid item xs={12} md={3}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Full Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} md={3}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Phone Number
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your phone"
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} md={3}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12} md={3}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Tell Us About Your Thought
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Enter your message"
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#064E3B",
                    paddingX: 4,
                    paddingY: 1,
                    borderRadius: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Submit Form
                </Button>
              </Box>
            </form>
          </StyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InquirySupportSection;
