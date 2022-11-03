import React, { useContext } from "react";
import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const handleToggle = () => {
    toggle();
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialMedia</span>
        </Link>
        <HomeOutlinedIcon style={{ color: "#111111" }} />
        {darkMode ? (
          <WbSunnyOutlinedIcon
            onClick={handleToggle}
            style={{ color: "#111111" }}
          />
        ) : (
          <DarkModeOutlinedIcon
            onClick={handleToggle}
            style={{ color: "#111111" }}
          />
        )}
        <GridViewOutlinedIcon style={{ color: "#111111" }} />
        <div className="search">
          <SearchOutlinedIcon style={{ color: "#111111" }} />
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon style={{ color: "#111111" }} />
        <EmailOutlinedIcon style={{ color: "#111111" }} />
        <NotificationsOutlinedIcon style={{ color: "#111111" }} />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
