import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "emailjs-com"; // Import EmailJS
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ConsultationContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh",
  marginTop: "-6px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

const BackgroundSwiper = styled(Swiper)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  "& .swiper-slide img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0,
    transition: "opacity 2s ease-in-out",
  },
  "& .swiper-slide-active img": {
    opacity: 1,
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "15px",
  padding: theme.spacing(5),
  backdropFilter: "blur(10px)",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  zIndex: 1,
  maxWidth: "500px",
  width: "100%",
  position: "absolute",
  [theme.breakpoints.up("md")]: {
    right: "5vw",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "300px",
    padding: theme.spacing(2),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0F4A3F",
  color: "white",
  "&:hover": {
    backgroundColor: "#00332d",
    transform: "scale(1.05)",
    transition: "transform 0.3s ease",
  },
  "&.Mui-disabled": {
    backgroundColor: "#195a4d", // Slightly lighter shade of the main button color
    color: "rgba(255, 255, 255, 0.7)", // Optional: Make the text slightly lighter too
  },
}));

const BackgroundImageSwiper = () => (
  <BackgroundSwiper
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    effect="fade"
    modules={[Autoplay, EffectFade]}
  >
    <SwiperSlide>
      <img src="/assets/consultation_image.png" alt="Consultation1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/consultation_image_2.webp" alt="Consultation2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/consultation_image_3.jpg" alt="Consultation3" />
    </SwiperSlide>
  </BackgroundSwiper>
);

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [consent, setConsent] = useState(false);

  // Function to check if the form is valid
  const isFormValid = () => {
    const { name, email, phone } = formData;
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name.trim() !== "" && emailRegex.test(email) && phone.trim() !== "";
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
        "template_1nosx0b", // Replace with your EmailJS template ID
        formData,
        "oIgG2V1yD_PdFdyB8" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to submit your request. Please try again.");
        }
      );

    setFormData({ name: "", email: "", phone: "" }); // Reset form fields after submission
  };

  return (
    <ConsultationContainer>
      <BackgroundImageSwiper />
      <FormContainer data-aos="fade-up">
        <Box textAlign="center" mb={1}>
          <Typography variant="h4" gutterBottom fontSize={24}>
            Request A Free Consultation Call
          </Typography>
          <Typography variant="body1" gutterBottom fontSize={14}>
            Schedule Your Free Consultation With VUIOR Today And Save Up To 25%
            On Household Bills While Accessing Our Exclusive Loan Programs!
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <StyledTextField
            label="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            label="Email"
            name="email"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            label="Phone Number"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Typography sx={{ fontSize: "0.75rem" }}>
                By checking this box I agree to receive automated promotional
                messages. This agreement is not a condition of purchase. Message
                frequency varies. Reply STOP to opt out or HELP for help.
                Message & data rates apply.{" "}
                <Link
                  to="/terms-of-service"
                  underline="hover"
                  sx={{ color: "#064e3b", fontWeight: "bold", fontSize: 14 }}
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  underline="hover"
                  sx={{ color: "#064e3b", fontWeight: "bold", fontSize: 14 }}
                >
                  Privacy Policy
                </Link>
                .
              </Typography>
            }
            sx={{ mt: 2 }}
          />
          <StyledButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!isFormValid()} // Disable button if the form is not valid
          >
            Schedule a Call
          </StyledButton>
        </Box>
      </FormContainer>
    </ConsultationContainer>
  );
};

export default ConsultationForm;
