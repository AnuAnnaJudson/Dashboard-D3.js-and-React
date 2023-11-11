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
import AccountWatchList from "./AccountWatchList";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

export default function LineChartCardComponent(props) {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [data, setData] = React.useState([]);

  const handleClick = () => {
    let newArray = [];
    for (let i = 0; i < 11; i++) {
      const randomValue = Math.floor(Math.random() * 100); // Adjust the range as needed
      newArray.push(randomValue);
    }
    setData(newArray);
  };

  const cardContent = {
    "Checking account": <Linechart data={data} setData={setData}/>,
    "Invoices owed to you": <Barchart />,
    "Total cash flow": <DoubleBarchart />,
    "Account Watchlist": <AccountWatchList />,
  };

  const cardHeader = {
    "Checking account": ["Manage", "January"].map((btnText) => {
      return (
        <Button
          size="small"
          aria-haspopup="menu"
          sx={{
            padding: 0,
            margin: 0,
            color: "black",
            textTransform: "none",
          }}
          onClick={
            btnText === "Manage" ? handleClick : (e) => e.preventDefault()
          }
        >
          {btnText}
          <ArrowDropDownIcon />
        </Button>
      );
    }),
    "Invoices owed to you": (
      <Button
        component="label"
        variant="contained"
        sx={{
          color: "#47B747",
          background: "#E8EEFD",
          "&:hover": { background: "#E8EEFD", boxShadow: "0" },
          boxShadow: "0",
          textTransform: "none",
        }}
      >
        New Sales Invoice
        <VisuallyHiddenInput type="file" />
      </Button>
    ),
    "Total cash flow": ["In", "Out"].map((btn) => {
      return (
        <Grid sx={{ display: "flex", flexDirection: "row", padding: 0.6 }}>
          <Box
            width={20}
            height={20}
            borderRadius={1}
            bgcolor={btn === "Out" ? "#47B747" : "#02BB7D"}
            paddingRight={0.5}
          />
          <Typography sx={{ paddingLeft: 0.5 }}>{btn}</Typography>
        </Grid>
      );
    }),
  };
  useEffect(()=>{},[data])
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
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {props.type}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              {cardHeader[props.type]}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <CardContent>{cardContent[props.type]}</CardContent>
      </Card>
    </Box>
  );
}
