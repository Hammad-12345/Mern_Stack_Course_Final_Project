import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentIcon from '@mui/icons-material/Comment';
import HelpIcon from '@mui/icons-material/Help';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Link } from 'react-router-dom'
import React from "react";
export default function SideNavWebApp() {
    return <>
        <Box flex={1} sx={{ display: { md: "block", xs: "none",backgroundColor:"#ebebeb" }}} >
            <Box position={"fixed"} sx={{backgroundColor:"#ebebeb"}} >

            <List sx={{"li":{paddingX:"5px"}}} >
                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1} }}>
                    <Link to={"/Dashboard"}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="DashBoard" sx={{"span":{color:"black",fontFamily:"Raleway",fontWeight:"600",textTransform:"uppercase"}}} >
                               
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1} }}>
                    <Link to={"/MyBlogs"}>
                        <ListItemButton>

                            <ListItemIcon>
                                <i class="fa-solid fa-blog"></i>
                            </ListItemIcon>
                            <ListItemText primary="My Blogs" sx={{"span":{color:"black",fontFamily:"Raleway",fontWeight:"600",textTransform:"uppercase"}}}>
                                
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Comments"}>
                        <ListItemButton >
                            <ListItemIcon>
                                <CommentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comments" sx={{"span":{color:"black",fontFamily:"Raleway",fontWeight:"600",textTransform:"uppercase"}}}>
                                
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Help_Desk"}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText  primary="Help Desk" sx={{"span":{color:"black",fontFamily:"Raleway",fontWeight:"600",textTransform:"uppercase"}}}>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNightIcon />
                        </ListItemIcon>
                        {/* <ListItemText primary="Dark Mode"  sx={{ "span":{fontFamily:"Raleway",fontWeight:"500"}}} /> */}
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    </>
}