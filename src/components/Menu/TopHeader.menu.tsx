"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Popover,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShopIcon from "@mui/icons-material/Shop";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIconOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AuthBreadcrumbs from "./Breadcrumbs/auth.menu.breadcrumbs";

const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setShopMenuOpen(false);
  };

  const handleShopToggle = () => {
    setShopMenuOpen((prevOpen) => !prevOpen);
  };

  const outlinedIconStyle = {
    color: "#23A6F0",
    width: "16px",
    height: "16px",
  };

  const outlinedIconNumberStyle = {
    color: "#23A6F0",
    fontSize: "14px",
  };

  // Array of menu items
  const menuItems = ["About", "Blog", "Contact", "Page"];

  return (
    <AppBar
      position="static"
      style={{
        background: "#FFFFFF",
        maxHeight: 56,
        height: "100%",
        position: "relative",
      }}
    >
      <Toolbar className="flex justify-between items-center">
        <div className="flex justify-evenly  space-x-32">
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            color={"#252B42"}
            sx={{ fontWeight: "bold", fontSize: "24px", lineHeight: "32px" }}
          >
            Bandage
          </Typography>

          {/* Menu Items */}
          <div className="hidden md:flex justify-center items-center text-[#737373] bg-white">
            <Button color="inherit">Home</Button>
            <Button color="inherit" onClick={() => handleShopToggle()}>
              Shop
              {shopMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </Button>
            {/* Array of menu items using map */}
            {menuItems.map((item, index) => (
              <Button color="inherit" key={index}>
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Icons: Login/Register, Search, Cart, Wishlist */}
        <div className="items-center space-x-4 hidden md:flex ">
          <AuthBreadcrumbs />
          <IconButton color="inherit">
            <SearchIconOutlined style={outlinedIconStyle} />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            <ShoppingCartOutlinedIcon style={outlinedIconStyle} />
            {/* Display cart count */}
            <span style={outlinedIconNumberStyle}>2</span>
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderOutlinedIcon style={outlinedIconStyle} />
            {/* Display wishlist count */}
            <span style={outlinedIconNumberStyle}>3</span>
          </IconButton>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <IconButton
            color="inherit"
            onClick={handleMenuToggle}
            ref={anchorRef}
            aria-controls={menuOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={menuOpen}
            onClose={handleMenuClose}
            transitionDuration={500}
          >
            {/* </Drawer> */}

            {/* <Popover
            id="menu-list-grow"
            anchorEl={anchorRef.current}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            style={{ width: "100%" }}
          > */}
            <Paper style={{ width: "100%" }}>
              <List>
                <ListItem button onClick={handleMenuClose}>
                  Home
                </ListItem>
                <ListItem button onClick={() => handleShopToggle()}>
                  <ListItemText primary="Shop" />
                  {shopMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {/* Array of menu items using map */}
                {menuItems.map((item, index) => (
                  <ListItem key={index} button onClick={handleMenuClose}>
                    {item}
                  </ListItem>
                ))}
              </List>

              <div className="items-center space-x-4 md:hidden flex flex-col">
                <AuthBreadcrumbs />
                <IconButton color="inherit">
                  <SearchIconOutlined style={outlinedIconStyle} />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ShoppingCartOutlinedIcon style={outlinedIconStyle} />
                  {/* Display cart count */}
                  <span style={outlinedIconNumberStyle}>2</span>
                </IconButton>
                <IconButton color="inherit">
                  <FavoriteBorderOutlinedIcon style={outlinedIconStyle} />
                  {/* Display wishlist count */}
                  <span style={outlinedIconNumberStyle}>3</span>
                </IconButton>
              </div>
            </Paper>
            {/* </Popover> */}
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
