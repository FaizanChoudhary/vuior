import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Programs", path: "/programs" },
    { text: "Membership", path: "/membership" },
    { text: "Careers", path: "/careers" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact Us", path: "/contact-us" },
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem button component={Link} to={item.path} key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky" // Make header sticky
      sx={{
        backgroundColor: "#004d40",
        padding: 1,
        zIndex: 1200, // Ensure header stays above content
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section: Logo */}
        <Box display="flex" alignItems="center">
          <Box sx={{ width: 150, height: 50 }}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>

        {/* Navigation Links with hover and active effects */}
        <Box display={{ xs: "none", md: "flex", gap: 2 }} alignItems="center">
          {navItems.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? "#4CAF50" : "#fff", // Green for active item
                ml: 2,
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: location.pathname === item.path ? "bold" : "normal", // Bold for active item
                transform:
                  location.pathname === item.path ? "scale(1.2)" : "scale(1)", // Zoomed for active
                transition: "transform 0.3s ease, color 0.3s ease", // Smooth transition for zoom and color
                "&:hover": {
                  color: "#4CAF50", // Green on hover
                  transform: "scale(1.2)", // Zoom in on hover,
                  transition: "transform 0.1s ease, color 0.1s ease", // Smooth transition for zoom and color
                },
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Box>

        {/* Hamburger Menu for small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for small screens */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
