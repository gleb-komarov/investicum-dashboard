import React from 'react';
import PieChart from "../../components/PieChart";
import {Box} from "@mui/material";
import LineChart from "../../components/LineChart";

const Index = () => {
    return (
        <Box m="20px">
            <Box height="75vh">
                <PieChart/>
            </Box>
            <Box height="75vh">
                <LineChart/>
            </Box>
        </Box>
    );
};

export default Index;