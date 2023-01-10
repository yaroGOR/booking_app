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
import Dns from "@mui/icons-material/Dns";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">YarikAdmin</span>
      </div>
      <hr/>

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">lists</p>
          <li>
          <AccountCircleIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <CategoryIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon"/>
            <span>Orders</span>
          </li>
          <p className="title">useful</p>
          <li>
            <BarChartIcon className="icon"/>
            <span>Statistics</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">service</p>
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
          <p className="title">user</p>
          <li>
            <BadgeIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div>
    </div>
  );
};

export default Sidebar;
