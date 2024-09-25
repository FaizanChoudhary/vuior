import React, { useRef, useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { privacyPolicy } from "../shared/constants"; // Ensure the path is correct

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(
      0,
      privacyPolicy.sections.length
    );
  }, []);

  const scrollToSection = (index) => {
    const ref = sectionRefs.current[index];
    if (ref) {
      ref.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(index); // Set active section on click
  };

  return (
    <Container
      sx={{
        flexGrow: 1,
        padding: 4,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, borderRadius: 2 }}
            data-aos="fade-up"
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0F4A3F", marginBottom: 2 }}
            >
              {privacyPolicy.navigationTitle}
            </Typography>
            <List>
              {privacyPolicy.navigationSidebar.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  sx={{
                    borderRadius: 2,
                    cursor: "pointer",
                    color: activeSection === index ? "white" : "#0F4A3F",
                    backgroundColor:
                      activeSection === index ? "#0F4A3F" : "transparent",
                    "&:hover": { backgroundColor: "#0F4A3F", color: "white" },
                  }}
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography
            data-aos="fade-up"
            variant="h4"
            sx={{ fontWeight: "bold", color: "#0F4A3F", marginBottom: 2 }}
          >
            {privacyPolicy.pageTitle}
          </Typography>

          {privacyPolicy.sections.map((term, index) => (
            <Box
              data-aos="fade-up"
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              sx={{
                marginBottom: 3,
                padding: 2,
                backgroundColor: "white",
                borderRadius: 1,
                boxShadow: 2,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <IconButton sx={{ color: "#0F4A3F", padding: 0 }}>
                  <InfoIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#0F4A3F", marginLeft: 1 }}
                >
                  {term.title}
                </Typography>
              </Box>
              <Divider sx={{ marginY: 1 }} />
              {term.content.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ color: "#333", marginBottom: 1 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivacyPolicy;
