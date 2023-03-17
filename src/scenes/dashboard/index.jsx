import React, {useEffect, useState} from 'react';
import {Box, Button, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { mockDataInvoices, mockTransactions } from "../../data/mockData";
import CurrencyListItem from "../../components/CurrencyListItem";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import DataTable from "../../components/DataTable";
import ApiService from "../../services/ApiService";
import SkeletonCurrencyListItem from "../../components/SkeletonCurrencyListItem";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [assetsCurrency, setAssetsCurrency] = useState([])
    const [isAssetsLoading, setIsAssetsLoading] = useState(false)

    useEffect( () => {
        fetchAssetsCurrency()
    }, [])

    async function fetchAssetsCurrency() {
        setIsAssetsLoading(true)
        setTimeout( async () => {
            const response = await ApiService.getAllAssetsCurrency()
            console.log(response.data.data)
            setAssetsCurrency(response.data.data)
            setIsAssetsLoading(false)
        }, 1000)

    }

    const columns = [
        { field: "id", headerName: "ID"},
        { field: "email", headerName: "Email", flex: 1, cellClassName: "name-column--cell"},
        { field: "cost", headerName: "Cost", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "date", headerName: "Start Date", flex: 1, type: "date"}
    ]

    return (
        <Box m="0 20px">
            {/*GRID*/}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="128px"
                gap="20px"
            >
                <Box
                    overflow="auto"
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="128px"
                    gap="20px"
                    sx={{
                        gridColumn: "span 12"
                    }}
                >
                    {
                        isAssetsLoading ? (
                                <Box
                                    sx={{
                                        gridColumn: "span 2",
                                        background: colors.primary[400],
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "20px",
                                        '&:hover': {
                                            background: colors.blueAccent[800]
                                        },
                                        cursor: "pointer"
                                    }}
                                >
                                    <SkeletonCurrencyListItem/>
                                </Box>
                            )
                            :
                            assetsCurrency.map((asset, index) =>
                                <Box
                                    key={asset.id}

                                    sx={{
                                        gridColumn: "span 2",
                                        background: colors.primary[400],
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "20px",
                                        '&:hover': {
                                            background: colors.blueAccent[800]
                                        },
                                        cursor: "pointer"
                                    }}
                                >
                                    <CurrencyListItem assetCurrency={asset}/>
                                </Box>
                            )
                    }

                    <Box
                        sx={{
                            gridColumn: "span 2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "20px",
                            border: "2px dashed #C2BBC8"
                        }}
                    >
                        <Button fullWidth startIcon={ <AddCircleOutlineOutlinedIcon/> } sx={{ color: colors.grey[100], height: "100%", borderRadius: "20px"}}>
                            Add new card
                        </Button>
                    </Box>
                </Box>
                {/*ROW 1*/}

                {/*ROW 2*/}
                <Box
                    gridColumn="span 8"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Total profit, USD
                        </Typography>
                    </Box>
                    <Box height="350px" p="0 30px">
                        <LineChart/>
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Your invest portfolio
                        </Typography>
                    </Box>
                    <Box height="350px" height="350px" display="flex" justifyContent="space-between" alignItems="center">
                        <PieChart/>
                    </Box>
                </Box>

                {/*ROW 3*/}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    overflow="auto"
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Your invest portfolio
                        </Typography>
                    </Box>
                    <Box
                        mt="25px"
                        p="0 30px"
                    >
                        <DataTable data={mockDataInvoices} columns={columns}/>
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    borderRadius="10px"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;