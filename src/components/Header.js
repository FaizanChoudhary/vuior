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
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Start with visible (opacity: 1)
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

  const handleScroll = () => {
    if (window.scrollY > 200 && window.scrollY < 400) {
      setIsVisible(false); // Fade out before sticky
    } else if (window.scrollY >= 400) {
      setIsSticky(true);
      setIsVisible(true); // Once sticky, fade back in
    } else {
      setIsSticky(false); // Reset to non-sticky state
      setIsVisible(true); // Make visible before sticky
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      position={isSticky ? "fixed" : "absolute"} // Make header sticky when required
      sx={{
        backgroundColor: "#004d40",
        padding: 1,
        zIndex: 1200,
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: isSticky ? "translateY(0)" : "translateY(-100%)", // Sliding effect when sticky
        opacity: isVisible ? 1 : 0, // Manage opacity effect with new isVisible state
        top: isSticky ? 0 : 150, // Adjust position when sticky
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
