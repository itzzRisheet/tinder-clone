import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import "./Header.css"; // connect css file
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import tinderLogo from "./images/icons/tinder.png"; // tinder logo from storage with variable like

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img className="header_logo" src={tinderLogo} alt="" />

      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
