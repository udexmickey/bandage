import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import useIsMobile from "@/hooks/useIsMobile";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function AuthBreadcrumbs() {
  const { isMobile } = useIsMobile();

  return (
    <div
      onClick={handleClick}
      className={`sm:font-normal ${isMobile ? "sm:text-3xl" : ""}`}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        color="#23A6F0"
        sx={{ fontSize: isMobile ? "1.875rem" : "14px" }}
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="#23A6F0"
          href="#"
          style={{
            fontWeight: isMobile ? "normal" : "300",
            fontSize: isMobile ? "1.875rem" : "14px",
          }}
        >
          <div className={`sm:font-normal ${isMobile ? "sm:text-3xl" : ""}`}>
            <PersonOutlineOutlinedIcon
              sx={{
                mr: 0.5,
                fontWeight: isMobile ? "normal" : "300",
                fontSize: isMobile ? "1.875rem" : "14px",
              }}
              fontSize="inherit"
            />
            <span>Login</span>
          </div>
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="#23A6F0"
          href="#"
          style={{
            fontWeight: isMobile ? "normal" : "300",
            fontSize: isMobile ? "1.875rem" : "14px",
          }}
        >
          Register
        </Link>
      </Breadcrumbs>
    </div>
  );
}
