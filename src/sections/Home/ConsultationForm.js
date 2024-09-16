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
import { Autoplay, EffectFade } from "swiper/modules"; // Using effect-fade for smoother transitions
import "swiper/css";
import "swiper/css/effect-fade"; // Include fade effect CSS
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

// Custom styles for the container to handle full-screen background
const ConsultationContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh", // Full viewport height
  // width: "100vw", // Full viewport width
  marginTop: "70px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Ensures no overflow from the background images
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
}));

const BackgroundSwiper = styled(Swiper)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1, // Ensure the background is behind the overlay
  "& .swiper-slide": {
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out", // Smooth transition
  },
  "& .swiper-slide img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0, // Initially set opacity to 0
    transition: "opacity 2s ease-in-out", // Slightly zoomed in for inactive slides
  },
  "& .swiper-slide-active img": {
    opacity: 1, // Fade in the active slide
  },
}));

// Form container with glassmorphism effect
const FormContainer = styled(Stack)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.8)", // Semi-transparent white (glass effect)
  borderRadius: "15px",
  padding: theme.spacing(4),
  backdropFilter: "blur(10px)", // Blur effect on the background
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Soft shadow
  zIndex: 1, // Keep form on top of the background
  maxWidth: "500px", // Control form width
  width: "100%",
  position: "absolute",
  [theme.breakpoints.up("md")]: {
    right: "5vw",
  },
}));

// Styling for text fields
const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
}));

// Styling for the button with hover effects
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0F4A3F",
  color: "white",
  "&:hover": {
    backgroundColor: "#00332d",
    transform: "scale(1.05)",
    transition: "transform 0.3s ease",
  },
}));

// Background image swiper component
const BackgroundImageSwiper = () => (
  <BackgroundSwiper
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 3000, // Smooth 3-second delay for each slide
      disableOnInteraction: false,
    }}
    loop={true} // Continuous loop for the background
    effect="fade"
    modules={[Autoplay, EffectFade]} // Adding fade effect module
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
  return (
    <ConsultationContainer>
      {/* Background Image Swiper */}
      <BackgroundImageSwiper />

      {/* Foreground Form */}
      <FormContainer data-aos="fade-up">
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" gutterBottom>
            Request A Free Consultation Call
          </Typography>
          <Typography variant="body1" gutterBottom>
            Schedule Your Free Consultation With Vuior Today And Save Up To 25%
            On Household Bills While Accessing Our Exclusive Loan Programs!
          </Typography>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <StyledTextField
            label="Name"
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
          <StyledButton variant="contained" fullWidth sx={{ mt: 2 }}>
            Schedule a Call
          </StyledButton>
        </Box>
      </FormContainer>
    </ConsultationContainer>
  );
};

export default ConsultationForm;
