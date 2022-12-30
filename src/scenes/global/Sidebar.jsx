import React, {useState} from 'react';
import {ProSidebar, Menu, MenuItem, SidebarFooter, SidebarContent} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Avatar, Box, Button, Icon, IconButton, SvgIcon, Typography, useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from '../../theme'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "10px 35px 10px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <SidebarContent>
                    <Menu iconShape="square">
                        {/*LOGO*/}
                        <MenuItem
                            onClick={ () => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <embed
                                        width="31px"
                                        height="36px"
                                        src={require('../../resources/Logo.png')}
                                    />
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        INVESTICUM
                                    </Typography>
                                </Box>
                            )}
                        </MenuItem>

                        {/*MENU ITEMS*/}
                        <Box
                            paddingLeft={isCollapsed ? undefined : "10%"}
                        >
                            <Item
                                title="Home"
                                to="/"
                                icon={<HomeOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Dashboard"
                                to="/dashboard"
                                icon={<DashboardOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Documents"
                                to="/documents"
                                icon={<FileCopyOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Statistic"
                                to="/statistic"
                                icon={<SsidChartOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Goals"
                                to="/goals"
                                icon={<TrackChangesOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Information"
                                to="/information"
                                icon={<InfoOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <MenuItem>
                            <Item
                                title={`Download app`}
                                to="/download-mobile-app"
                                icon={<FileDownloadOutlinedIcon/>}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;