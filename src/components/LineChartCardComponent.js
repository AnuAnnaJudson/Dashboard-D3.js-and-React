import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Divider, Grid } from "@mui/material";
import Linechart from "./Linechart";

export default function LineChartCardComponent() {
  return (
    <Box height="100%" width="100%">
      <Card>
        <CardContent sx={{ padding: 0.6 }}>
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
          <Linechart />
        </CardContent>
      </Card>
    </Box>
  );
}
