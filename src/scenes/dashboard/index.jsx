import React from 'react';
import {Box} from "@mui/material";
import CurrencyListItem from "../../components/CurrencyListItem";

const Dashboard = () => {
    return (
        <Box>
            <CurrencyListItem title={'Bitcoin (BTC)'} total={'$39 853,80'} diff={'−673,10'}></CurrencyListItem>
        </Box>
    );
};

export default Dashboard;