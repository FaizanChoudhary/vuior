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

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Navigation links for the top menu and drawer
  const navItems = [
    "Home",
    "Programs",
    "Membership",
    "Careers",
    "About Us",
    "Contact Us",
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
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
              sx={{ color: "#fff", ml: 2, cursor: "pointer" }}
            >
              {item}
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
