import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import {
  setRightSideNavigationOpen,
  setisMenuOpen,
  setisSideNavOpen,
  toggleDarkMode,
} from "../../state";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const isSideNavOpen = useSelector((state) => state.app.isSideNavOpen);
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            "@media (max-width: 500px)": {
              flexDirection: "column",
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(setisSideNavOpen({}))}
            sx={{
              marginRight: "36px",
              "@media (max-width: 500px)": {
                display: "none",
              },
            }}
          >
            {!isSideNavOpen ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              "@media (max-width: 500px)": {
                marginLeft: "30px",
              },
            }}
          >
            E commerce Application
          </Typography>
          {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "@media (max-width: 500px)": {
                width: "100%",
                justifyContent: "space-around",
              },
              // '@media (max-width: 500px)': {
              //   display: 'none',
              // },
            }}
          >
            {/* ShowMore For Phone Mode  */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(setisMenuOpen({}))}
              sx={{
                display: "none",
                alignItems: "center",
                "@media (max-width: 500px)": {
                  display: "flex",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* ShowMore For Phone Mode  */}

            <Tooltip
              title={!darkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              <IconButton
                size="large"
                color="inherit"
                onClick={() => dispatch(toggleDarkMode({}))}
              >
                {darkMode ? (
                  <LightModeIcon
                    sx={{ width: 26, height: 26, color: "white" }}
                  />
                ) : (
                  <DarkModeIcon
                    sx={{ width: 26, height: 26, color: "white" }}
                  />
                )}
              </IconButton>
            </Tooltip>

            <Tooltip title="Select Location">
              <IconButton size="large" color="inherit">
                <LocationOnRoundedIcon
                  sx={{ width: 26, height: 26, color: "white" }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Notifications">
              <IconButton
                id="basic-button"
                size="large"
                // className='NotificationBell-button'
                // current-count={NotificationCount()}
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsIcon
                    sx={{ width: 25, height: 25, color: "white" }}
                  />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Account Menu">
              <IconButton size="large">
                <AccountCircle sx={{ width: 26, height: 26, color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
