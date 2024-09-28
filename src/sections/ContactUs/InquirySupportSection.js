import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "emailjs-com"; // Import EmailJS
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        height: 50,
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

const GlassBox = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(20px)",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  padding: theme.spacing(4),
  boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.1)",
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
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
}));

const InquirySupportSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);

  // Function to check if the form is valid
  const isFormValid = () => {
    const { name, email, phone, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
    return (
      name.trim() !== "" &&
      emailRegex.test(email) &&
      phone.trim() !== "" &&
      message.trim() !== ""
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r3sreim", // Replace with your EmailJS service ID
        "template_jec6sw6", // Replace with your EmailJS template ID
        formData,
        "oIgG2V1yD_PdFdyB8" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to submit your inquiry. Please try again.");
        }
      );

    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form fields after submission
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/assets/new/contact-us.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "-6px !important",
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
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
        }}
      />
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          fontSize={{ xs: 24, md: 30 }}
          sx={{ color: "#fff" }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            width: "90%",
            height: "4px",
            backgroundColor: "#23AB84",
          }}
        />
      </Box>

      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Section - Contact Information */}
        <Grid item xs={12} md={4} data-aos="fade-up">
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
            value="info@vuior.com"
          />

          <ContactInfoItem
            iconSrc="/assets/icons/time.png"
            label="Customer Service"
            value="24/7 Customer Service"
          />
        </Grid>

        {/* Right Section - Inquiry Form */}
        <Grid item xs={12} md={8}>
          <GlassBox data-aos="fade-up">
            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 2, color: "#fff" }}
            >
              Have Any Questions?
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center">
                {/* Full Name */}
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Full Name
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Phone Number
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    Your Message
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <StyledTextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    sx={{
                      color: "white", // Checkbox border color when unchecked
                      "&.Mui-checked": {
                        color: "white", // Checkbox color when checked
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "0.75rem", mt: 2, color: "white" }}
                  >
                    By checking this box I agree to receive automated
                    promotional messages. This agreement is not a condition of
                    purchase. Message frequency varies. Reply STOP to opt out or
                    HELP for help. Message & data rates apply.{" "}
                    <Link
                      to="/terms-of-service"
                      underline="hover"
                      sx={{
                        color: "#a8e6cf",
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy-policy"
                      underline="hover"
                      sx={{
                        color: "#a8e6cf",
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </Typography>
                }
                sx={{ mt: 2 }}
              />

              {/* Submit Button */}
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
              >
                <Button
                  type="submit"
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
                  disabled={!isFormValid()} // Disable button if form is not valid
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
