import * as React from 'react';
import {Box, IconButton, useTheme, Button, Avatar, MenuItem} from "@mui/material";
import Menu from '@mui/material/Menu';
import { useContext } from 'react';
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
// ICONS
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display="flex" justifyContent="space-between" p={2} alignItems="center">
            {/*SEARCH BAR*/}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                alignItems="center"
                borderRadius="20px"
            >
                <InputBase sx={{ml: 2, flex: 1}} placeholer="Search"/>
                <IconButton type="button" sx={ {p: 1} }>
                    <SearchIcon/>
                </IconButton>
            </Box>

            {/*ICONS*/}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <IconButton onClick={ colorMode.toggleColorMode }>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon/>
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton>
                    <StarOutlineOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <FilterAltOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <IosShareOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlinedIcon/>
                </IconButton>
                <Box marginLeft={4}>
                    <Button
                        color="secondary"
                        size="large"
                        variant="text"
                        startIcon={<Avatar src="https://mui.com/static/images/avatar/1.jpg">G</Avatar>}
                        endIcon={ <KeyboardArrowDownOutlinedIcon/> }
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Gleb Komarov
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem
                            onClick={handleClose}
                        >
                            <SettingsOutlinedIcon sx={{ mr: 1 }}/>
                            Profile
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                        >
                            <PersonOutlinedIcon sx={{ mr: 1 }}/>
                            My account
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                        >
                            <LogoutOutlinedIcon sx={{ mr: 1 }}/>
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;