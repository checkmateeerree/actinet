import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import actinetLogo from "../public/actinet_logo.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Drawer, Box, Button, AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, toggleDrawer] = useState(false);
  const toggleDrawers = (open) => {
    toggleDrawer(open);
  };
  const pathList = [
    ["/", "Home"],
    ["/about", "About Us"],
    ["/donate", "Donate"],
    ["/contact", "Contact Us"],
    ["/login", "Login"]
  ];

  const iconPath = {
    "/": <HomeOutlinedIcon />,
    "/about": <InfoOutlinedIcon />,
    "/donate": <MonetizationOnOutlinedIcon />,
    "/contact": <EmailOutlinedIcon />,
    "/login": <LockOutlinedIcon />
  };

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <div className="pt-1 me-auto" style={{ cursor: "pointer" }}>
              <Link href="/">
                <Image
                  src={actinetLogo}
                  height="60"
                  width="200"
                  alt="actinet Logo"
                />
              </Link>
            </div>
            <Link href="/register">
              <Button variant="outlined" color="warning">
                Register
              </Button>
            </Link>
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
              anchor={"right"}
              open={drawerOpen}
              onClose={() => toggleDrawers(false)}
            >
              <Box sx={{ width: "250px" }}>
                <IconButton onClick={() => toggleDrawers(false)}>
                  <ChevronRightIcon />
                </IconButton>
                <Divider />
                <List>
                  {pathList.map((path) => {
                    console.log(path);
                    return (
                      <Link href={path[0]} key={path[1]}>
                        <ListItem
                          button
                          key={path[1]}
                          onClick={() => toggleDrawers(false)}
                        >
                          <ListItemIcon>{iconPath[path[0]]}</ListItemIcon>

                          <ListItemText primary={path[1]} />
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default Navbar;
