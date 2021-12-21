import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    function signout() {
        signOut(auth).then(() => {dispatch(logout());})
        .catch((err) => {console.log(err)}) 
    }

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img alt='user' src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'></img>
            </div>
            <div className="header_middle">
                <SearchIcon/>
                <input type="text" placeholder="Search mail"></input>
                <ArrowDropDownIcon/>
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar sx={{cursor: 'pointer'}} src={user?.photoUrl} onClick={signout} />
            </div>
        </div>
    )
}

export default Header
