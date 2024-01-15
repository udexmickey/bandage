import React from "react";
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
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const PromotionMenu: React.FC = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: "#23856D",
        maxHeight: 56,
        height: "100%",
        position: "relative",
      }}
    >
      <Toolbar className="flex justify-between items-center text-white">
        {/* Left Column: Phone and Email */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <IconButton color="inherit">
              <PhoneIcon />
            </IconButton>
            <Link href="tel:(225) 555-0118" color="inherit">
              (225) 555-0118
            </Link>
          </div>
          <div className="flex items-center">
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <Link color="inherit" href="mailto:michelle.rivera@example.com">
              michelle.rivera@example.com
            </Link>
          </div>
        </div>

        {/* Center Column: Follow Us Text */}
        <Typography
          variant="body2"
          color="inherit"
          sx={{ fontWeight: "bold", fontSize: "14px", lineHeight: "24px" }}
        >
          Follow Us and get a chance to win 80% off
        </Typography>

        {/* Right Column: Social Media Icons */}
        <div className="flex items-center space-x-2">
          <Typography
            className="text-white"
            variant="body2"
            color="inherit"
            sx={{ fontWeight: "bold", fontSize: "14px", lineHeight: "24px" }}
          >
            Follow Us :{" "}
          </Typography>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <YouTubeIcon />
          </IconButton>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default PromotionMenu;
