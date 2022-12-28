import { Box, IconButton, useTheme, Button, Avatar } from "@mui/material";
import { useContext } from 'react';
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import SettingsModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import PersonModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SearchIcon from "@mui/icons-material/SearchOutlined";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/*SEARCH BAR*/}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
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
                <Box display="flex" justifyContent="space-between" marginLeft={4}>
                    <Avatar src="https://mui.com/static/images/avatar/1.jpg">G</Avatar>
                    <Button
                        color="secondary"
                        size="large"
                        variant="text"
                    >
                        Gleb Komarov
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;