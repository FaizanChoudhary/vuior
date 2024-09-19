import React from "react";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Custom background swiper for sliding images
const BackgroundSwiper = styled(Swiper)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1, // Ensure swiper stays behind the content
  "& .swiper-slide img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0,
    transition: "opacity 2s ease-in-out",
  },
  "& .swiper-slide-active img": {
    opacity: 1, // Only the active slide is fully visible
  },
}));

// Styled container with glassmorphism effect
const GlassContainer = styled(Stack)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "15px",
  padding: 10,
  backdropFilter: "blur(10px)",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  zIndex: 1, // Ensure this is above the swiper
  width: "100%",
  maxWidth: "800px",
  position: "absolute",
}));

const JoinOurTeam = () => {
  return (
    <Box
      sx={{
        position: "relative", // Make sure this is relative for absolute children
        height: "80vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px !important",
        // Hide any overflow from the background swiper
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
        <SwiperSlide>
          <img src="/assets/welcome_career.jpg" alt="Career 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/welcome_career1.webp" alt="Career 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/welcome_career4.webp" alt="Career 4" />
        </SwiperSlide>
      </BackgroundSwiper>

      {/* Foreground Content */}
      <GlassContainer data-aos="fade-up">
        {/* Heading */}
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
        <List sx={{ marginBottom: 3 }}>
          {[
            "Sales Manager - Growth Division",
            "Debt Management Specialist - Team Lead",
            "Customer Service Manager - Excellence Team",
            "Marketing Manager - Awareness Campaigns",
            "Recruiting Manager - Talent Acquisition",
            "Project Manager - Growth Initiatives",
            "Vuoir Ambassador Program Manager",
            "Community Engagement Manager",
            "Strategic Partnerships Manager",
          ].map((job, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <FiberManualRecordIcon
                  sx={{ color: "#064E3B", fontSize: 12 }}
                />
              </ListItemIcon>
              <ListItemText primary={job} />
            </ListItem>
          ))}
        </List>

        {/* Apply Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#064E3B",
            paddingX: 3,
            width: "100%",
            "&:hover": {
              backgroundColor: "#00332d",
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          Apply Now &rarr;
        </Button>
      </GlassContainer>
    </Box>
  );
};

export default JoinOurTeam;
