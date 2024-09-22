import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Topbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: { xs: 2, md: 5 }, py: "10px", backgroundColor: "#ffffff" }}
    >
      {/* Address and Phone Number Section */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon color="primary" />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "10px", md: "14px" } }}
          >
            70240 Avenue of the Moon, California
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon color="primary" />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "10px", sm: "14px" } }}
          >
            (833) 569-3941
          </Typography>
        </Stack>
      </Stack>

      {/* Social Media Icons Section */}
      <Stack direction="row">
        <IconButton
          color="primary"
          aria-label="Twitter"
          href="https://twitter.com"
          sx={{
            transition: "transform 0.3s ease", // Transition for smooth zoom
            "&:hover": {
              transform: "scale(1.2)", // Zoom in on hover
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Instagram"
          href="https://instagram.com"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="LinkedIn"
          href="https://linkedin.com"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Topbar;
