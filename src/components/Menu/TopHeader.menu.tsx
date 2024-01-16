"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import SearchIconOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AuthBreadcrumbs from "./Breadcrumbs/auth.menu.breadcrumbs";
import useIsMobile from "@/hooks/useIsMobile";
import MobileMenu from "./MobileMenu";

// Defined TopMenu component
const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const { isMobile } = useIsMobile();

  // Function to handle opening and closing of main menu
  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  // Function to handle closing of all menus
  const handleMenuClose = () => {
    setMenuOpen(false);
    setShopMenuOpen(false);
  };

  // Function to handle opening and closing of shop submenu
  const handleShopToggle = () => {
    setShopMenuOpen((prevOpen) => !prevOpen);
  };

  // Styles for outlined icons
  const outlinedIconStyle = {
    color: "#23A6F0",
    // width: isMobile ? "1.5rem" : "16px",
    // height: isMobile ? "1.5rem" : "16px",
    fontSize: isMobile ? "1.5rem" : "1.5rem",
  };

  const outlinedIconNumberStyle = {
    color: "#23A6F0",
    fontWeight: isMobile ? "normal" : "300",
    fontSize: isMobile ? "1.5rem" : "16px",
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
        <div className="flex justify-between items-center  space-x-32">
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
          <div className="hidden md:flex justify-center items-center text-base text-[#737373] bg-white">
            <Button color="inherit" sx={{ fontSize: "1rem !important" }}>
              Home
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "inherit" }}
              onClick={() => handleShopToggle()}
            >
              Shop
              {shopMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </Button>
            {/* Array of menu items using map */}
            {menuItems.map((item, index) => (
              <Button color="inherit" key={index} sx={{ fontSize: "inherit" }}>
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Icons: Login/Register, Search, Cart, Wishlist */}
        <div className="items-center text-2xl space-x-2 hidden md:flex ">
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

        {/* // Mobile Menu Drawer */}
        {isMobile && (
          <MobileMenu
            menuOpen={menuOpen}
            handleMenuToggle={handleMenuToggle}
            handleMenuClose={handleMenuClose}
            handleShopToggle={handleShopToggle}
            shopMenuOpen={shopMenuOpen}
            menuItems={menuItems}
            outlinedIconStyle={outlinedIconStyle}
            outlinedIconNumberStyle={outlinedIconNumberStyle}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
