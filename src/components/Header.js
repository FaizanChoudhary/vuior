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
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Navigation links for the top menu and drawer
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
    <AppBar position="static" sx={{ backgroundColor: "#004d40", padding: 1 }}>
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

        {/* Right Section: Phone Icon and Menu for large screens */}
        <Box display={{ xs: "none", md: "flex" }} alignItems="center">
          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              component={Link} // Use Link component from react-router-dom
              to={item.path} // Navigate to the corresponding path
              sx={{
                color: "#fff",
                ml: 2,
                cursor: "pointer",
                textDecoration: "none", // Remove underline from link
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
