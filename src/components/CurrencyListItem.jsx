import React from 'react';
import {Box, Link, Typography, useTheme} from "@mui/material";
import { tokens } from "../theme"

const CurrencyListItem = ({assetCurrency}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Link href={assetCurrency.explorer} target="_blank" rel="noreferrer" underline="none" width="100%">
            <Box m="0 20px">
                <Box display="flex" justifyContent="space-between">
                    <Typography
                        variant="h4"
                        fontWeight="500"
                        sx={{ color: colors.grey[100]}}
                    >
                        {assetCurrency.name} ({assetCurrency.symbol})
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt="10px" alignItems="center">
                    <Typography
                        variant="h3"
                        fontWeight="600"
                        sx={{ color: colors.grey[100]}}
                    >
                        {parseFloat(assetCurrency.priceUsd).toFixed(2)}
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight="500"
                        sx={{ color: colors.grey[100]}}
                    >
                        {parseFloat(assetCurrency.changePercent24Hr).toFixed(2) + '%'}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default CurrencyListItem;