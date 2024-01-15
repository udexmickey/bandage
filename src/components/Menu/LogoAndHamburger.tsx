import React from "react";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface LogoAndHamburgerProps {
  handleMenuToggle: () => void;
  menuOpen: boolean; // Add this line
}

const LogoAndHamburger: React.FC<LogoAndHamburgerProps> = ({
  handleMenuToggle,
  menuOpen,
}) => {
  return (
    <div className="flex justify-evenly items-center space-x-32">
      {/* Logo */}
      <Typography
        variant="h6"
        component="div"
        color={"#252B42"}
        sx={{ fontWeight: "bold", fontSize: "24px", lineHeight: "32px" }}
      >
        Bandage
      </Typography>

      {/* Hamburger Menu */}
      <IconButton
        color="inherit"
        onClick={handleMenuToggle}
        aria-controls={menuOpen ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default LogoAndHamburger;
