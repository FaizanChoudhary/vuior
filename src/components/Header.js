import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
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
import Topbar from "./Topbar";

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
      sx={{
        width: 250,
        backgroundColor: "#0F4A3F", // Background color for the drawer
        height: "100%", // Full height
        padding: 2, // Padding for the drawer
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/logo.png" // Logo source
          alt="Logo"
          width={100} // Adjust width as needed
          style={{ objectFit: "contain" }}
        />
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={index}
            sx={{
              "&:hover": {
                backgroundColor: "#23AB84", // Background color on hover
                color: "#fff",
              },
              padding: "10px 20px", // Padding for better spacing
            }}
          >
            <ListItemText
              primary={item.text}
              sx={{ fontSize: 16, color: "#fff" }} // Text color
            />
          </ListItem>
        ))}
      </List>
      {/* My Account Button */}
      <Button
        variant="contained"
        color="secondary" // Use your desired highlight color
        sx={{
          width: "90%",
          backgroundColor: "#23AB84", // Green color for highlight
          color: "#fff",
          fontWeight: "bold",
          ml: { xs: 1, sm: 1.3 }, // Adjust margin for spacing between nav items and button
          padding: "6px 12px",
          "&:hover": {
            backgroundColor: "#1C8067", // Darker shade on hover
          },
        }}
        onClick={() =>
          window.open("https://add.vuior.com/user/login", "_blank")
        }
      >
        My Account
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        position: isSticky ? "sticky" : "relative",
        zIndex: 1200,
        transition: "transform 1s ease, opacity 1s ease",
        transform: isSticky ? "translateY(0)" : "translateY(-100%)",
        top: isSticky ? 0 : 130,
      }}
    >
      <Topbar />
      <AppBar
        position="relative"
        sx={{
          height: "70px !important",
          backgroundColor: "#0F4A3F",
          padding: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
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

          <Box
            display={{ xs: "none", md: "flex", gap: 5, paddingBottom: 10 }}
            alignItems="center"
          >
            {navItems.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(item.path + "/");

              return (
                <Typography
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? "#23AB84" : "#fff",
                    ml: 2,
                    cursor: "pointer",
                    fontSize: 14,
                    position: "relative",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: "-4px",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#23AB84",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              );
            })}
            {/* My Account Button */}
            <Button
              variant="contained"
              color="secondary" // Use your desired highlight color
              sx={{
                backgroundColor: "#23AB84", // Green color for highlight
                color: "#fff",
                fontWeight: "bold",
                ml: 3, // Adjust margin for spacing between nav items and button
                padding: "6px 12px",
                "&:hover": {
                  backgroundColor: "#1C8067", // Darker shade on hover
                },
              }}
              onClick={() =>
                window.open("https://add.vuior.com/user/login", "_blank")
              }
            >
              My Account
            </Button>
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
