import React, { useContext, useState, useEffect } from 'react'
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
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { Variables } from '../../Variables';

const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [token, setToken] = useState("");
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
    const { lightMode, setLightMode } = useContext(AppContext);
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        const jwtToken = localStorage.getItem("jwtToken");
        if (jwtToken) {
            setToken(jwtToken);
            axios
                .get(Variables.API_URL + "user/UserRole", {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                })
                .then((response) => {
                    if (response.data === "Admin") {
                        setIsAdmin(true);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    return (
        <header>
            {isAdmin && <Link to="/admin/analytics" style={{ textDecoration: 'none' }}><h3 className={(!lightMode ? " dark__mode" : "")}>Administration</h3></Link>}
            <nav className={(lightMode ? " light__mode" : "")}>
                <div>
                    <h1 className='logo'>Fondgram</h1>
                    <input type="text" className={'search' + (lightMode ? " light__mode" : "")} name='search' placeholder='Search...' />
                    <button className={'search__button' + (lightMode ? " light__mode" : "")} type='button'>
                        <Search sx={{ color: lightMode ? 'black' : '' }} />
                    </button>
                </div>
                <ul onClick={isMobileMenuToggled ? () => setIsMobileMenuToggled(!isMobileMenuToggled) : null} className={"navbar__links" + (isMobileMenuToggled ? " small__screen" : "") + (lightMode ? " light__mode" : "")}>
                    {isMobileMenuToggled && <Close onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)} sx={{
                        color: lightMode ? 'black' : 'white',
                        position: 'absolute',
                        top: '18px',
                        fontSize: '32px',
                        right: '20px',
                        cursor: 'pointer',
                    }} />}
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                            {!lightMode ? (<LightMode onClick={() => setLightMode(!lightMode)} sx={{ cursor: 'pointer' }} title="set dark mode" />
                            ) : (lightMode && <DarkMode onClick={() => setLightMode(!lightMode)} sx={{ color: 'black', cursor: 'pointer' }} />)}
                            {isMobileMenuToggled && <p className='link__text' style={{ color: lightMode ? 'black' : 'white' }}>Set {lightMode ? 'dark' : 'light'} mode</p>}

                        </div>
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <Link to="/admin/" style={{ textDecoration: 'none' }}>
                            <div sx={{ display: 'flex', alignItems: 'center' }}>
                                <Message sx={{ color: lightMode ? 'black' : 'white' }} />
                                {isMobileMenuToggled && <p className='link__text' style={{ color: lightMode ? 'black' : 'white' }}>Messages</p>}
                            </div>
                        </Link>
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <Link to="/admin/" style={{ textDecoration: 'none' }}>
                            <div sx={{ display: 'flex', alignItems: 'center' }}>
                                <Notifications sx={{ color: lightMode ? 'black' : 'white' }} />
                                {isMobileMenuToggled && <p className='link__text' style={{ color: lightMode ? 'black' : 'white' }}>Notifications</p>}
                            </div>
                        </Link>
                    </li>
                    <li className={(isMobileMenuToggled ? " small__screen " : " hide__on__small__screen")}>
                        <Link to="/about/" style={{ textDecoration: 'none' }}>
                            <div sx={{ display: 'flex', alignItems: 'center' }}>
                                <Help sx={{ color: lightMode ? 'black' : 'white' }} />
                                {isMobileMenuToggled && <p className='link__text' style={{ color: lightMode ? 'black' : 'white' }}>About</p>}
                            </div>
                        </Link>
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
                            top: '15px',
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