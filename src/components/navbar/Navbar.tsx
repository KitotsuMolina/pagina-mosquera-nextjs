// components/Navbar.tsx
'use client'
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Tooltip,
    SvgIcon,
    ListItemIcon
} from '@mui/material';
import Menu  from '@mui/icons-material/Menu';
import drawerItems from '@/json/drawerItems.json'; // Importa el JSON
import './navbar.css';
import Link from 'next/link';
const Navbar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);


    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static" className="fixed top-0 w-full" color="default" enableColorOnDark>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <Menu />
                    </IconButton>
                    <ListItemText primary="Bienvenido" />
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {drawerItems.map((item, index) => (
                            <ListItem button key={index}>
                                <Link href={item.redirect}>
                                    <Tooltip title={item.name}>
                                        <img src={item.icon} alt={item.name} className="h-8 w-8 mt-1 mb-1 ml-1 mr-1 " />
                                    </Tooltip>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default Navbar;