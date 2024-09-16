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
    if (window.scrollY >= 400) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
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
            <ListItemText primary={item.text} sx={{ fontSize: 14 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position={isSticky ? "fixed" : "absolute"} // Make header sticky when required
      sx={{
        height: "70px !important",
        backgroundColor: "#0F4A3F",
        padding: 1,
        zIndex: 1200,
        transition: "transform 0.7s ease, opacity 0.7s ease",
        transform: isSticky ? "translateY(0)" : "translateY(-100%)", // Sliding effect when sticky
        top: isSticky ? 0 : 130, // Adjust position when sticky
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
        <Box
          display={{ xs: "none", md: "flex", gap: 5, paddingBottom: 10 }}
          alignItems="center"
        >
          {navItems.map((item, index) => (
            <Typography
              key={index}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? "#23AB84" : "#fff", // Green for active item
                ml: 2,
                cursor: "pointer",
                fontSize: 14,
                position: "relative", // Necessary for positioning the pseudo-element
                fontWeight: location.pathname === item.path ? "bold" : "normal", // Bold for active item
                textDecoration: "none",
                transform:
                  location.pathname === item.path ? "scale(1.2)" : "scale(1)", // Zoomed for active
                transition: "transform 0.3s ease, color 0.3s ease", // Smooth transition for zoom and color
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-4px", // Adjust the gap between the text and underline
                  width: "100%",
                  height: "2px", // Height of the underline
                  backgroundColor: "#23AB84", // Color of the underline
                  transform:
                    location.pathname === item.path ? "scaleX(1)" : "scaleX(0)", // Show underline for active
                  transformOrigin: "left",
                  transition: "transform 0.3s ease", // Animation for the underline
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
