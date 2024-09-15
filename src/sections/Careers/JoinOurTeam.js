import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const JoinOurTeam = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text and Job Positions */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", color: "#064E3B", marginBottom: 2 }}
          >
            Join Our Team!
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Vuoir is always looking for passionate and talented individuals to
            join our team. We offer a range of remote positions with excellent
            earning potential and opportunities for career growth. Explore our
            available positions and apply today!
          </Typography>

          {/* Job Positions List */}
          <List>
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
            sx={{ backgroundColor: "#064E3B", paddingX: 3, marginTop: 3 }}
          >
            Apply Now &rarr;
          </Button>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/welcome_career.png" // Replace with actual path to the image
            alt="Team"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinOurTeam;
