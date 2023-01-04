import React from 'react';
import {Box, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "../theme";

const DataTable = ({columns, data}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            height="75vh"
            width="100%"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700]
                }
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
            />
        </Box>
    );
};

export default DataTable;