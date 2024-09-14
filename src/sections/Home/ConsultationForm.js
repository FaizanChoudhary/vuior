import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom styles for the container to handle background
const ConsultationContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#e6f4f1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Responsive image container with gradient fade
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative", // For positioning gradient overlay
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%", // Adjust width for small screens
      height: "auto",
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: "50%", // Start gradient from the center for fade effect
    background: "linear-gradient(to right, transparent, #e6f4f1 100%)",
    zIndex: 1, // Ensure gradient is over the image
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    border: "none",
    "& fieldset": {
      border: "none",
    },
  },
}));

const ConsultationForm = () => {
  return (
    <ConsultationContainer>
      <Grid container spacing={4} alignItems="center">
        {/* Left column - Image */}
        <Grid item xs={12} md={6}>
          <ImageContainer data-aos="fade-up">
            {" "}
            {/* Add AOS animation */}
            <img src="/assets/consultation_image.png" alt="Customer Support" />
          </ImageContainer>
        </Grid>

        {/* Right column - Form */}
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              padding: 5,
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
              />
              <StyledTextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <StyledTextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                // InputProps={{
                //   startAdornment: <Box sx={{ mr: 1 }}>+1</Box>,
                // }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Schedule a Call
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </ConsultationContainer>
  );
};

export default ConsultationForm;
