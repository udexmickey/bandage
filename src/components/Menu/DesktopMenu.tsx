import React from "react";
import { Button, Typography, IconButton } from "@mui/material";
import SearchIconOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AuthBreadcrumbs from "./Breadcrumbs/auth.menu.breadcrumbs";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface DesktopMenuProps {
  menuItems: string[];
  handleShopToggle: () => void;
  shopMenuOpen: boolean;
  outlinedIconStyle: React.CSSProperties;
  outlinedIconNumberStyle: React.CSSProperties;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  menuItems,
  handleShopToggle,
  shopMenuOpen,
  outlinedIconStyle,
  outlinedIconNumberStyle,
}) => {
  return (
    <div className="flex justify-between items-center space-x-32">
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
        <Button color="inherit" onClick={handleShopToggle}>
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
    </div>
  );
};

export default DesktopMenu;
