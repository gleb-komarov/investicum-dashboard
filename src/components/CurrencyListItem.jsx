import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../theme"

const CurrencyListItem = ({title, total, diff}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box width="100%" m="0 20px" borderRadius="10px">
            <Box display="flex">
                <Typography
                    variant="h4"
                    fontWeight="500"
                    sx={{ color: colors.grey[100]}}
                >
                    {title}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="spaceBetween" alignItems="center">
                <Typography
                    variant="h3"
                    fontWeight="600"
                    sx={{ color: colors.grey[100]}}
                >
                    {total}
                </Typography>
                <Typography
                    variant="h5"
                    fontWeight="500"
                    sx={{ color: colors.grey[100]}}
                >
                    {diff}
                </Typography>
            </Box>
        </Box>
    );
};

export default CurrencyListItem;