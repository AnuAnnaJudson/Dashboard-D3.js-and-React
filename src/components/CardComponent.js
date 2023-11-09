import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Divider, Grid } from "@mui/material";
import DoubleBarchart from "./DoubleBarchart";
import Linechart from "./Linechart";
import Barchart from "./Barchart";

export default function LineChartCardComponent(props) {
  const cardContent={
    "Checking account":<Linechart/>,
    "Invoices owed to you":<Barchart/>,
    "Total cash flow": <DoubleBarchart/>,
    "none":<Barchart/>
  }
  return (
    <Box height="100%" width="100%">
      <Card>
        <CardContent>
          <Grid container xs={12} sx={{ padding: 0 }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                padding: 0.7,
              }}
            >
              <Typography variant="body2">Checking Account</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                size="small"
                aria-haspopup="menu"
                sx={{
                  padding: 0,
                  margin: 0,
                  color: "black",
                  textTransform: "none",
                }}
              >
                Manage
                <ArrowDropDownIcon />
              </Button>
              <Button
                size="small"
                aria-haspopup="menu"
                sx={{
                  padding: 0,
                  margin: 0,
                  color: "black",
                  textTransform: "none",
                }}
              >
                January
                <ArrowDropDownIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <CardContent>
          {cardContent[props.type]}
        </CardContent>
      </Card>
    </Box>
  );
}
