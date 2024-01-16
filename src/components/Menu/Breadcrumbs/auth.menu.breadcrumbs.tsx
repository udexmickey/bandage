import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
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
      className={`sm:font-normal ${isMobile ? "sm:text-2xl" : ""}`}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        color="#23A6F0"
        sx={{ fontSize: isMobile ? "1.5rem" : "16px" }}
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="#23A6F0"
          href="#"
          style={{
            fontWeight: isMobile ? "normal" : "300",
            fontSize: isMobile ? "1.5rem" : "1rem",
          }}
        >
          <div className={`sm:font-normal ${isMobile ? "sm:text-2xl" : ""}`}>
            <PersonOutlineOutlinedIcon
              sx={{
                mr: 0.5,
                fontWeight: isMobile ? "normal" : "300",
                fontSize: isMobile ? "1.5rem" : "1rem",
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
            fontSize: isMobile ? "1.5rem" : "1rem",
          }}
        >
          Register
        </Link>
      </Breadcrumbs>
    </div>
  );
}
