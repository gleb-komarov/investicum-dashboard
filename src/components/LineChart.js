import React from 'react';
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockLineData } from "../data/mockData";
import { linearGradientDef } from "@nivo/core";

const LineChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <ResponsiveLine
            data={mockLineData}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100]
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text: {
                            fill: colors.grey[100]
                        }
                    }
                },
                legends: {
                    text: {
                        fill: colors.grey[100]
                    }
                }
            }}
            colors={{ datum: 'color' }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                stacked: true
            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            defs={[
                linearGradientDef('gradientA', [
                    { offset: 0, color: 'inherit' },
                    { offset: 100, color: 'inherit', opacity: 0 },
                ]),
            ]}
            enableGridX={false}
            enableGridY={false}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            enableCrosshair={false}
            useMesh={true}
            legends={[]}
            enableArea={true}

        />
    );
};

export default LineChart;