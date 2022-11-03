import React, { useContext } from "react";
import "./SideBar.scss";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import SmartDisplayTwoToneIcon from "@mui/icons-material/SmartDisplayTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import OndemandVideoTwoToneIcon from "@mui/icons-material/OndemandVideoTwoTone";
import MarkUnreadChatAltTwoToneIcon from "@mui/icons-material/MarkUnreadChatAltTwoTone";
import { AuthContext } from "../../context/authContext";

function SideBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <GroupTwoToneIcon />
            <span>Amigos</span>
          </div>
          <div className="item">
            <GroupsTwoToneIcon />
            <span>Grupos</span>
          </div>
          <div className="item">
            <StorefrontTwoToneIcon />
            <span>Loja</span>
          </div>
          <div className="item">
            <SmartDisplayTwoToneIcon />
            <span>Assista</span>
          </div>
          <div className="item">
            <HistoryTwoToneIcon />
            <span>Memórias</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <CalendarMonthTwoToneIcon />
            <span>Eventos</span>
          </div>
          <div className="item">
            <SportsEsportsTwoToneIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsTwoToneIcon />
            <span>Galeria</span>
          </div>
          <div className="item">
            <OndemandVideoTwoToneIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <MarkUnreadChatAltTwoToneIcon />
            <span>Mensagens</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
