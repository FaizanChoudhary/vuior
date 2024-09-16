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
          <LocationOnIcon />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "10px", md: "16px" } }}
          >
            70240 Avenue of the Moon, California
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "10px", sm: "16px" } }}
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
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Instagram"
          href="https://instagram.com"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="LinkedIn"
          href="https://linkedin.com"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Topbar;
