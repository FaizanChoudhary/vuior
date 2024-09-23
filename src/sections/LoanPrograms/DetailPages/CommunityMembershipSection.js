import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CommunityMembershipSection = ({ data }) => {
  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Text Section */}
      <Grid item xs={12} md={6} data-aos="fade-up">
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            fontSize={{ xs: 24, md: 30 }}
          >
            VUIOR Community and Membership
          </Typography>
          <Box
            sx={{
              width: "55%",
              borderBottom: "3px solid #23AB84",
              margin: "0",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          component="p"
          color="textSecondary"
          sx={{ mb: 4 }}
        >
          Apply now to get started!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "text.secondary",
            lineHeight: 1.7,
          }}
        >
          {data.communityDescription}
        </Typography>
      </Grid>

      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={data.communityImage}
          alt="communityImage"
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CommunityMembershipSection;
