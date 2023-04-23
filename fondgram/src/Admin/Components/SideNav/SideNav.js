import React from 'react'
import "./SideNav.css"
import { NavLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorageIcon from '@mui/icons-material/Storage';

const SideNav = () => {

    return (
        <div className="sidebar">
            <h1>Fondgram</h1>
            <ul>
                <li>
                    <NavLink to="/admin/dashboards" className={({ isActive }) => isActive ? "active" : ''}>
                        <DashboardIcon sx={{ fontSize: "29px" }} />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/users" className={({ isActive }) => isActive ? "active" : ''}>
                        <PersonOutlineIcon sx={{ fontSize: "29px" }} />
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/analytics" className={({ isActive }) => isActive ? "active" : ''}>
                        <AnalyticsIcon sx={{ fontSize: "29px" }} />
                        Analytics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/reports" className={({ isActive }) => isActive ? "active" : ''}>
                        <ReportIcon sx={{ fontSize: "29px" }} />
                        Reports
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/messages" className={({ isActive }) => isActive ? "active" : ''}>
                        <MailOutlineIcon sx={{ fontSize: "29px" }} />
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "active" : ''}>
                        <SettingsIcon sx={{ fontSize: "29px" }} />
                        Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/dbentities" className={({ isActive }) => isActive ? "active" : ''}>
                        <StorageIcon sx={{ fontSize: "29px" }} />
                        Db Entities
                    </NavLink>
                </li>
            </ul>
            <button type='button' className='log__out__button'>
                <LogoutIcon sx={{ fontSize: "28px" }} />
                Log Out
            </button>
        </div >
    )
}

export default SideNav