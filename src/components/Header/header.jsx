import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <div className='header'>
            <div className='header_nav'>
                <h1>TMDB</h1>
                <div className='line'></div>
            </div>
            <div className="nav">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='popular'>
                    <li>Popular</li>
                </Link>
                <Link to='toprated'>
                    <li>Toprated</li>
                </Link>
            </div>
            <div className='add'>
                <PersonAddAlt1Icon/>
                <select>
                    <option>RU</option>
                    <option>EN</option>
                </select>
                <input type="text"placeholder='поиск'/>
                <SearchIcon/>
            </div>
        </div>
    );
};

export default Header;