import React from "react";
import { Paper, List, ListItem, ListItemText } from "@mui/material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IconButton, Drawer, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import SearchIconOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AuthBreadcrumbs from "./Breadcrumbs/auth.menu.breadcrumbs";
import { ExpandMore } from "@mui/icons-material";

interface MobileMenuProps {
  menuOpen: boolean;
  handleMenuClose: () => void;
  handleShopToggle: () => void;
  shopMenuOpen: boolean;
  menuItems: string[];
  // Add new props for the Hamburger Menu and Drawer
  handleMenuToggle: () => void;
  outlinedIconStyle: React.CSSProperties;
  outlinedIconNumberStyle: React.CSSProperties;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  handleMenuClose,
  handleShopToggle,
  shopMenuOpen,
  menuItems,
  handleMenuToggle, // Prop for Hamburger Menu
  outlinedIconStyle,
  outlinedIconNumberStyle,
}) => {
  return (
    <div className="md:hidden">
      {/* Hamburger Menu */}
      <IconButton
        color="inherit"
        onClick={handleMenuToggle}
        aria-controls={menuOpen ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <HiOutlineMenuAlt3 />
      </IconButton>
      <Drawer
        anchor="top"
        open={menuOpen}
        onClose={handleMenuClose}
        transitionDuration={500}
        sx={{ marginTop: "56px" }}
      >
        <Paper style={{ width: "100%" }}>
          {/* Logo and Hamburger */}
          <div className="flex justify-between items-center p-4">
            <Typography
              variant="h6"
              component="div"
              color={"#252B42"}
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Bandage
            </Typography>
            <IconButton color="inherit" onClick={handleMenuClose}>
              <HiOutlineMenuAlt3 />
            </IconButton>
          </div>

          {/* Main Menu */}
          <div className="items-center font-normal text-3xl justify-center w-full space-x-4 md:hidden flex flex-col">
            <List>
              <ListItem button onClick={handleMenuClose}>
                Home
              </ListItem>
              <ListItem button onClick={() => handleShopToggle()}>
                <ListItemText
                  primary="Shop"
                  primaryTypographyProps={{
                    fontWeight: "normal",
                    fontSize: "1.875rem",
                  }}
                />
                {shopMenuOpen ? (
                  <ExpandLess
                    style={{
                      fontWeight: "normal",
                      fontSize: "1.875rem",
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      fontWeight: "normal",
                      fontSize: "1.875rem",
                    }}
                  />
                )}
              </ListItem>
              {/* Array of menu items using map */}
              {menuItems.map((item, index) => (
                <ListItem key={index} button onClick={handleMenuClose}>
                  {item}
                </ListItem>
              ))}
            </List>
          </div>

          {/* Icons: Login/Register, Search, Cart, Wishlist */}
          <div className="items-center justify-center w-full space-x-4 md:hidden flex flex-col py-8">
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
      </Drawer>
    </div>
  );
};

export default MobileMenu;
