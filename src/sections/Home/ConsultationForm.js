import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import emailjs from "emailjs-com"; // Import EmailJS

const ConsultationContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh",
  marginTop: "60px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
  padding: theme.spacing(4),
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
        <Box textAlign="center" mb={2}>
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
          <StyledButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Schedule a Call
          </StyledButton>
        </Box>
      </FormContainer>
    </ConsultationContainer>
  );
};

export default ConsultationForm;
