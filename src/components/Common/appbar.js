// AppBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

import ProfileImg from '../../assets/profile/avatar.png'

function AppBarComponent() {
    // Define state for the mobile drawer
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    // Toggle the mobile drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const appBarStyle = {
        backgroundColor: '#006B72',
    };

    return (
        <>
            <AppBar position="static" style={appBarStyle}>
                <Toolbar>
                    {/* App Name (Desktop and Mobile) */}
                    <div
                        style={{ flexGrow: 1 }}
                        className='text-white font-sans text-md font-extrabold'>
                        STELLARSTRIDE
                    </div>


                    {/* Desktop View */}
                    <div className="hidden md:flex font-sans my-auto">
                        <Link to="/" className="text-white mx-2">
                            Home
                        </Link>
                        <Link to="/destinations" className="text-white mx-2">
                            Destinations
                        </Link>
                        <Link to="/bookings" className="text-white mx-2">
                            Bookings
                        </Link>
                        <Link to="/profile" className="text-white mx-2">
                            <Avatar alt="Profile" src={ProfileImg} />
                        </Link>
                        <Link to="/logout" className="text-white mx-2">
                            <IconButton color="inherit">
                                <LogoutIcon />
                            </IconButton>
                        </Link>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden">
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Mobile View Drawer */}
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} width="80vw">
                <div className="py-4 px-4 w-3/4">
                    {/* Mobile view navigation links */}
                    <Link to="/" className="block py-2">
                        Home
                    </Link>
                    <Link to="/destinations" className="block py-2">
                        Destinations
                    </Link>
                    <Link to="/bookings" className="block py-2">
                        Bookings
                    </Link>
                    <Link to="/profile" className="block py-2">
                        Profile
                    </Link>
                    <Link to="/logout" className="block py-2">
                        Logout
                    </Link>
                </div>
            </Drawer>
        </>
    );
}

export default AppBarComponent;
