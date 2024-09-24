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
      sx={{
        px: { xs: 2, md: 5 },
        py: { xs: "15px", sm: "10px" },
        backgroundColor: "#ffffff",
      }}
    >
      {/* Address and Phone Number Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2 }}
        alignItems={{ Xs: "flex-start", sm: "center" }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon
            color="primary"
            sx={{ fontSize: { xs: "15px", sm: "30px" } }}
          />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "9px", sm: "14px" } }}
          >
            70240 Avenue of the Moon, California
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon
            color="primary"
            sx={{ fontSize: { xs: "15px", sm: "30px" } }}
          />
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "9px", sm: "14px" } }}
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
          href="https://x.com/vuiorhq"
          target="blank"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <TwitterIcon sx={{ fontSize: { xs: "15px", sm: "30px" } }} />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Instagram"
          href="https://www.instagram.com/vuiorhq"
          target="blank"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: { xs: "15px", sm: "30px" } }} />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/company/vuior-hq/?trk=blended-typeahead"
          target="blank"
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: { xs: "15px", sm: "30px" } }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Topbar;
