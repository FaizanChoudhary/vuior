import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

// Custom styles for the container to handle background
const ConsultationContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  height: "90%",
}));

// Responsive image container with gradient fade
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

// Form container with gradient background
const FormContainer = styled(Stack)(({ theme }) => ({
  background: "linear-gradient(135deg, #E6F4F1 0%, #ffffff 100%)",
  borderRadius: "10px",
  padding: theme.spacing(6),
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

// Styling for text fields
const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    border: "none",
    "& fieldset": {
      border: "none",
    },
  },
}));

// Styling for the button with hover effects
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#004d40",
  color: "white",
  "&:hover": {
    backgroundColor: "#00332d",
    transform: "scale(1.05)",
    transition: "transform 0.3s ease",
  },
}));

// Image swiper component
const ImageSwiper = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    style={{
      "--swiper-pagination-color": "#004D40",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px",
      "--swiper-pagination-bullet-horizontal-gap": "6px",
    }}
    modules={[Autoplay, Pagination, Navigation]}
  >
    <SwiperSlide>
      <img src="/assets/consultation_image.png" alt="Consultation1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/consultation_image_2.jpg" alt="Consultation2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/consultation_image_3.jpg" alt="Consultation3" />
    </SwiperSlide>
  </Swiper>
);

const ConsultationForm = () => {
  return (
    <ConsultationContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Left column - Swiper */}
        <Grid item xs={12} lg={6}>
          <ImageContainer data-aos="fade-up">
            <ImageSwiper />
          </ImageContainer>
        </Grid>

        {/* Right column - Form */}
        <Grid item xs={12} lg={6} sx={{ p: 6 }}>
          <FormContainer
            sx={{
              alignItems: "center",
            }}
            data-aos="fade-up" // AOS animation for the form
          >
            <Box px={10} textAlign="center">
              <Typography variant="h4" gutterBottom>
                Request A Free Consultation Call
              </Typography>
              <Typography variant="body1" gutterBottom>
                Schedule Your Free Consultation With Vuior Today And Save Up To
                25% On Household Bills While Accessing Our Exclusive Loan
                Programs!
              </Typography>
            </Box>
            <Box component="form" noValidate autoComplete="off" mt={2}>
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
        </Grid>
      </Grid>
    </ConsultationContainer>
  );
};

export default ConsultationForm;
