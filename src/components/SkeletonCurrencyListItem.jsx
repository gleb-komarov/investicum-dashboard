import React from 'react';
import {Box, Skeleton} from "@mui/material";

const SkeletonCurrencyListItem = () => {
    return (
        <Box m="0 20px" width="100%">
            <Box display="flex" justifyContent="space-between">
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width="100%"/>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="65%"/>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="25%"/>
            </Box>
        </Box>
    );
};

export default SkeletonCurrencyListItem;