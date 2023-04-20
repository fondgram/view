import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close,
} from '@mui/icons-material';
import { AppContext } from '../../AppContext';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';



const Navbar = () => {
    const isAdmin = true;//Todo: make this dynamic
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
    const { lightMode, setLightMode } = useContext(AppContext);
    const [menu, setMenu] = useState(true);

    const handleToggleDarkMode = () => {
        setLightMode(!lightMode)
    }

    const handleAccountNavigation = () => {
        if (!menu) {
            document.querySelector(".my_account__menu").style.display = "flex";
            setMenu(true);
        } else {
            document.querySelector(".my_account__menu").style.display = "none";
            setMenu(false);
        }
    };

    return (
        <header>
            {isAdmin && <NavLink to="/admin/analytics" style={{ textDecoration: 'none' }}><h3 className={(!lightMode ? " dark__mode" : "")}>Administration</h3></NavLink>}
            <nav className={(lightMode ? " light__mode" : "")}>
                <div>
                    <h1 className='logo'>Fondgram</h1>
                    <input type="text" className={'search' + (lightMode ? " light__mode" : "")} name='search' placeholder='Search...' />
                    <button className={'search__button' + (lightMode ? " light__mode" : "")} type='button'>
                        <Search sx={{ color: lightMode ? 'black' : '' }} />
                    </button>
                </div>
                <ul className={"navbar__links" + (isMobileMenuToggled ? " small__screen" : "") + (lightMode ? " light__mode" : "")}>
                    {isMobileMenuToggled && <Close onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)} sx={{
                        color: lightMode ? 'black' : 'white',
                        position: 'absolute',
                        top: '20px',
                        fontSize: '32px',
                        right: '20px',
                        cursor: 'pointer',
                    }} />}
                    <li>
                        {!lightMode && <LightMode onClick={handleToggleDarkMode} sx={{ cursor: 'pointer' }} title="set dark mode" />}
                        {lightMode && <DarkMode onClick={handleToggleDarkMode} sx={{ color: 'black', cursor: 'pointer' }} />}
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <NavLink to="/admin/" >
                            <Message sx={{ color: lightMode ? 'black' : 'white' }} />
                        </NavLink>
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <NavLink to="/admin/" >
                            <Notifications sx={{ color: lightMode ? 'black' : 'white' }} />
                        </NavLink>
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <NavLink to="/about">
                            <Help sx={{ color: lightMode ? 'black' : 'white' }} />
                        </NavLink>
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <Dropdown />
                    </li>
                </ul>
                <li>
                    <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)} className='hamburger__bar'>
                        <Menu sx={{
                            display: { xs: 'block', sm: 'block', md: 'none' },
                            color: lightMode ? 'black' : 'white',
                            position: 'absolute',
                            top: '20px',
                            fontSize: '28px',
                            right: '0',
                        }} />
                    </IconButton>
                </li>
            </nav>
        </header>
    )
}

export default Navbar