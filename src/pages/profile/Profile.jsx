import React from "react";
import "./Profile.scss";
import { FacebookTwoTone } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Place } from "@mui/icons-material";
import { Language } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import Posts from "../../components/posts/Posts";

function Login() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/3349638/pexels-photo-3349638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <Twitter fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <LinkedIn fontSize="medium" />
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>Carlos Ziegler</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>USA</span>
              </div>
              <div className="item">
                <Language />
                <span>Inglês</span>
              </div>
            </div>
            <button>Seguir</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default Login;
