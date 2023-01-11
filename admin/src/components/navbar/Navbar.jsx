import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="searchIcon" />
        </div>
        <div className="items">
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon" />
              English
            </div>
            <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>
              <DarkModeIcon className="icon" />
            </div>
            <div className="item">
              <CircleNotificationsIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleIcon className="icon" />
              <div className="counter">2</div>

            </div>
            <div className="item">
              <FormatListBulletedIcon className="icon" />
            </div>
            <div className="item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
