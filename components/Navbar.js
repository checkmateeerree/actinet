import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import {List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
import actinetLogo from '../public/actinet_logo.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, Box, Button, AppBar, Toolbar} from '@mui/material';

const Navbar = () => {
    const [drawerOpen, toggleDrawer] = useState(false);
    const toggleDrawers = (open) => {
        toggleDrawer(open);
    }

    return (
        <nav>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                
                <div className="pt-1 me-auto" style={{"cursor":"pointer"}}>
                    <Link href="/" >
                        <Image src={actinetLogo} height="60" width="200" alt="actinet Logo"/>
                    </Link>
                </div>
                <Button variant="outlined" color="warning">Register</Button>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={() => toggleDrawers(true)}
                >
                <MenuIcon />
                </IconButton>
               

                <Drawer
                    anchor={'right'}
                    open={drawerOpen}
                    onClose={() => toggleDrawers(false)}
                    
                >
                    
                    <Box sx={{width: "25vw"}}>
                    <IconButton onClick={() => toggleDrawers(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                    <Divider />
                    <List>
             <Link href="/">
        <ListItem button key={"Home"} onClick={()=> toggleDrawers(false)}>
           
                <ListItemIcon>
                    <HomeOutlinedIcon/>
                </ListItemIcon>
           
            <ListItemText primary={"Home"} />
        </ListItem>
        </Link>
        <Link href="/about">
        <ListItem button key={"About Us"} onClick={()=> toggleDrawers(false)}>
           
                <ListItemIcon>
                    <InfoOutlinedIcon/>
                </ListItemIcon>
            
                <ListItemText primary={"About Us"} />
      
        </ListItem>
        </Link>
        <Link href="/donate">
        <ListItem button key={"Donate"} onClick={()=> toggleDrawers(false)}>
            
                <ListItemIcon>
                    <MonetizationOnOutlinedIcon/>
                </ListItemIcon>
                
                <ListItemText primary={"Donate"} />
           
        </ListItem>
        </Link>
        <Link href="/contact">
        <ListItem button key={"Contact Us"} onClick={()=> toggleDrawers(false)}>
           
                <ListItemIcon>
                    <EmailOutlinedIcon />
                </ListItemIcon>
           
                <ListItemText primary={"Contact Us"} />
          
        </ListItem>
        </Link>
    
        <Link href="/login">
        <ListItem button key={"Login"} onClick={()=> toggleDrawers(false)}>
           
                <ListItemIcon>
                    <LockOutlinedIcon />
                </ListItemIcon>
           
                <ListItemText primary={"Login"} />
          
        </ListItem>
        </Link>
    </List>
                   
                    </Box>
                </Drawer>
               
            </Toolbar>
            </AppBar>
        </Box>
        </nav>
  );
}
    

export default Navbar
