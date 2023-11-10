import { Grid, Typography } from "@mui/material";
import React from "react";

const AccountWatchList = () => {
  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" sx={{ color: "grey", paddingBottom: 1 }}>
          Account
        </Typography>
        {["Sales", "Advertising", "Inventory", "Entertainment", "Product"].map(
          (text) => {
            return (
              <Typography variant="body1" paddingBottom={1}>
                {text}
              </Typography>
            );
          }
        )}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" sx={{ color: "grey", paddingBottom: 1 }}>
          This Month
        </Typography>
        {["1,194.58", "6879.02", "4,692.26", "0.00", "4,652.10"].map((text) => {
          return (
            <Typography variant="body1" paddingBottom={1}>
              {text}
            </Typography>
          );
        })}
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" sx={{ color: "grey", paddingBottom: 1 }}>
          YTD
        </Typography>
        {["11,418.29", "9,271.36", "9,768.09", "0.00", "2,529.90"].map(
          (text) => {
            return (
              <Typography variant="body1" paddingBottom={1}>
                {text}
              </Typography>
            );
          }
        )}
      </Grid>
    </Grid>
  );
};

export default AccountWatchList;
