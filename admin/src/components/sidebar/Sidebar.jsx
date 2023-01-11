import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import TocIcon from '@mui/icons-material/Toc';
import BadgeIcon from '@mui/icons-material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import DnsIcon from '@mui/icons-material/Dns';


import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {

  const {dispatch } = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style ={{textDecoration:"none"}}>
        <span className="logo">YarikAdmin</span>
        </Link>
      </div>
      <hr/>

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style ={{textDecoration:"none"}}>

          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style ={{textDecoration:"none"}}>

          <li>
          <AccountCircleIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style ={{textDecoration:"none"}}>

          <li>
            <CategoryIcon className="icon"/>
            <span>Hotels</span>
          </li>
          </Link>
          <Link to="/rooms" style ={{textDecoration:"none"}}>

          <li>
            <ShoppingCartIcon className="icon"/>
            <span>Rooms</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <BarChartIcon className="icon"/>
            <span>Statistics</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <DnsIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <TocIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <Link to="/" style ={{textDecoration:"none"}}>

          <li>
            <BadgeIcon className="icon"/>
            <span>Profile</span>
          </li>
          </Link>
          <li>
            <LogoutIcon className="icon"/>
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick ={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick ={()=>dispatch({type:"DARK"})}></div>
        <div className="colorOption" ></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div>
    </div>
  );
};

export default Sidebar;
