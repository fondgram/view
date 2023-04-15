import React, { useContext } from 'react'
import "./Navbar.css"
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AppContext } from '../../AppContext';
import Dropdown from './Dropdown';


const Navbar = () => {
    const { lightMode, setLightMode } = useContext(AppContext);
    const handleToggleDarkMode = () => {
        setLightMode(!lightMode)
    }
    return (
        <header>
            <nav className={(lightMode ? " light__mode" : "")}>
                <div>
                    <h1 className='logo'>Fondgram</h1>
                    <input type="text" className={'search' + (lightMode ? " light__mode" : "")} name='search' placeholder='Search...' />
                    <button className={'search__button' + (lightMode ? " light__mode" : "")} type='button'>
                        <Search sx={{ color: lightMode ? 'black' : ''}}/>
                    </button>
                </div>
                <ul>
                    <li>
                        {
                            !lightMode && <LightMode onClick={handleToggleDarkMode} sx={{ cursor: 'pointer' }} />

                        }
                        {
                            lightMode && <DarkMode onClick={handleToggleDarkMode} sx={{ color: 'black', cursor: 'pointer' }} />}
                    </li>
                    <li>
                        <Message sx={{ color: lightMode ? 'black' : ''}} />
                        <Menu sx={{ color: lightMode ? 'black' : ''}}/>
                    </li>
                    <li>
                        <Notifications sx={{ color: lightMode ? 'black' : ''}}/>
                    </li>
                    <li>
                        <Help sx={{ color: lightMode ? 'black' : ''}}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar