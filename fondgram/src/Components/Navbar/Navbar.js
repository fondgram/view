import React from 'react'
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


const Navbar = () => {
    return (
        <header>
            <nav className='light'>
                <div>
                    <h1 className='logo'>Fondgram</h1>
                    <input type="text" className='search' name='search' placeholder='Search...' />
                    <button className='search__button' type='button'>
                        <Search />
                    </button>
                </div>
                <ul>
                    <li>
                        <DarkMode />
                    </li>
                    <li>
                        <Message />
                        <Close/>
                        <Menu/>
                    </li>
                    <li>
                        <Notifications />
                    </li>
                    <li>
                        <Help />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar