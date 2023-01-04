import React from 'react';
import { Box } from "@mui/material";
import { mockDataInvoices } from "../../data/mockData";
import DataTable from "../../components/DataTable";
import Header from "../../components/Header";

const Index = () => {

    const columns = [
        { field: "id", headerName: "ID"},
        { field: "email", headerName: "Email", flex: 1, cellClassName: "name-column--cell"},
        { field: "cost", headerName: "Cost", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "date", headerName: "Start Date", flex: 1, type: "date"}
    ]

    return (
        <Box m="20px">
            <Header title={'Invoices'} subtitle={'Check your invoices'}/>
            <DataTable data={mockDataInvoices} columns={columns} />
        </Box>
    );
};

export default Index;