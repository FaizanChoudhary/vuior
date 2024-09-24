// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Button,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Custom background swiper for sliding images
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

// Styled container with glassmorphism effect
const GlassContainer = styled(Stack)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "15px",
  padding: 10,
  backdropFilter: "blur(10px)",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  zIndex: 1,
  width: "100%",
  maxWidth: "800px",
  position: "absolute",
  [theme.breakpoints.down("md")]: {
    maxWidth: "600px", // Apply padding only on small screens and below
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "350px", // Apply padding only on small screens and below
  },
}));

const JoinOurTeam = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-6px !important",
      }}
    >
      {/* Background Image Swiper */}
      <BackgroundSwiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        modules={[Autoplay, EffectFade]}
      >
        {/* <SwiperSlide>
          <img src="/assets/welcome_career.jpg" alt="Career 1" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src="/assets/welcome_career1.webp" alt="Career 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/welcome_career4.webp" alt="Career 4" />
        </SwiperSlide>
      </BackgroundSwiper>

      {/* Foreground Content */}
      <GlassContainer data-aos="fade-up">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#064E3B",
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          Join Our Team!
        </Typography>

        {/* Job Positions List */}
        {/* <List sx={{ marginBottom: 3 }}>
          {[
            "Sales Manager - Growth Division",
            "Debt Management Specialist - Team Lead",
            "Customer Service Manager - Excellence Team",
            "Marketing Manager - Awareness Campaigns",
            "Recruiting Manager - Talent Acquisition",
            "Project Manager - Growth Initiatives",
            "Vuior Ambassador Program Manager",
            "Community Engagement Manager",
            "Strategic Partnerships Manager",
          ].map((job, index) => (
            <ListItem key={index} sx={{ paddingY: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20 }}>
                <FiberManualRecordIcon
                  sx={{ color: "#064E3B", fontSize: 12 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={job}
                primaryTypographyProps={{
                  sx: { fontSize: { xs: "12px", sm: "16px" } },
                }}
              />
            </ListItem>
          ))}
        </List> */}
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "16px" },
            marginBottom: 3,
            padding: { xs: 1, sm: 2, md: 4.5 },
          }}
        >
          At Vuior, we're constantly seeking passionate and talented individuals
          who are driven to make a difference. Our team thrives on innovation,
          collaboration, and a commitment to excellence. Whether you're looking
          to start your career or take it to the next level, we offer exciting
          opportunities across various remote positions. With Vuior, you can
          enjoy the flexibility of working from anywhere while benefiting from
          competitive earning potential and numerous paths for career
          development. Explore our current job openings and become part of a
          dynamic team where your skills can grow and thrive. Apply today and
          take the next step toward a rewarding future with Vuior!
        </Typography>

        {/* Apply Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#064E3B",
            paddingX: 4,
            paddingY: 1,
            borderRadius: "20px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.4s ease",
            },
          }}
          onClick={() => navigate("/careers/jobs")}
        >
          Apply Now <ArrowForwardIcon fontSize="small" sx={{ ml: 1 }} />
        </Button>
      </GlassContainer>
    </Box>
  );
};

export default JoinOurTeam;
