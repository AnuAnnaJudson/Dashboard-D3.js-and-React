import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Grid } from "@mui/material";
import LineChartCardComponent from "./CardComponent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240;

function DashboardComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const icons = {
    Dashboard: <DashboardIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />,
    Accounts: (
      <AccountBalanceWalletIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />
    ),
    Payroll: <AttachMoneyIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />,
    Reports: <DescriptionIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />,
    Advisor: <PersonIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />,
    Contacts: <ContactsIcon sx={{ "&:hover": { color: "#FFFFFF" } }} />,
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "Dashboard",
          "Accounts",
          "Payroll",
          "Reports",
          "Advisor",
          "Contacts",
        ].map((text) => (
          <ListItem
            key={text}
            sx={{ "&:hover": { color: "#FFFFFF" } }}
            disablePadding
          >
            <ListItemButton
              sx={{ "&:hover": { background: "#47B747", color: "#FFFFFF" } }}
            >
              <ListItemIcon>{icons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "#FFFFFF" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* header on top */}
          <Grid
            container
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <TextField
              sx={{ backgroundColor: "#F6F7F9", border: "none" }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon sx={{ color: "grey" }} />
                  </IconButton>
                ),
              }}
            />
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={""} color="success" variant="small">
                <NotificationsIcon sx={{color:"black"}}/>
              </Badge>
            </IconButton>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{marginTop:"6px"}} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Contents of the page */}
        <Grid container xs={12}>
          <Grid item xs={12} md={6} padding={1}>
            <LineChartCardComponent type="Checking account" />
          </Grid>
          <Grid item xs={12} md={6} padding={1}>
            <LineChartCardComponent type="Invoices owed to you" />
          </Grid>
          <Grid item xs={12} md={6} padding={1}>
            <LineChartCardComponent type="Total cash flow" />
          </Grid>
          <Grid item xs={12} md={6} padding={1}>
            <LineChartCardComponent type="Account Watchlist" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

DashboardComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardComponent;
