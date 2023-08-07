import * as React from 'react';
import {NavLink,BrowserRouter} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import {setglobalusername, setglobalpassword, setname, setuserType} from "../features/loginSlice"



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../logo.png'

const Navbar = () => {
    const dispatch = useDispatch();

    // Retrieving the session stored:
    // const username = useSelector((state) => state.login.username)

    const logout = () => {
      dispatch(setglobalusername(""))
      dispatch(setglobalpassword(""))
      dispatch(setname(""))
      dispatch(setuserType(""))
    }

    const userType = useSelector((state) => state.login.userType)

    console.log("Navbar" + userType)

    const theme = createTheme({
        palette: {
          primary: {
            main: 'rgba(245, 245, 245, 0.85)',
            // set the font color to black
            contrastText: '#000000'
          },
          secondary: {
            main: '#edf2ff',
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: '0px 2px 15px -1px rgba(0, 0, 0, 0.1), 0px 4px 15px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)',
                outline: 'none',
              },
            },
          },
        },
      });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky">
                <Toolbar >
                    <Box display="flex" justifyContent="center"  marginRight="10px">
                      <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/task_viewer">
                            <Button sx={{color:"black"}}>
                              Corporate Logo
                            </Button>
                      </NavLink>
                    </Box>
                    { userType === "VENDOR" || userType === "ADMIN" || userType === "APPROVER" ?
                    <>
                    {/* Place User Related Nav Links here ############################################## */}

                    {/* END OF USER Related Nav Links here ############################################## */}
                    {userType === "Admin" ?<>
                    {/* Place Admin Related Nav Links here############################################## */}
                    <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/manageAccount">
                      <Box display="flex" justifyContent="center" marginLeft="10px" marginRight="10px">
                            <Button sx={{color:"black"}} > 
                                MANAGE ACCOUNTS
                            </Button>
                      </Box>                            
                    </NavLink>

                    {/* End of Admin Related Nav Links here ############################################## */}
                    {userType === "APPROVER" ? <>
                    {/* Place APPROVER Related Nav Links here############################################## */}

                    {/* End of APPROVER Related Nav Links here ############################################## */}

                    </> : <></>}
                    
                    </>:<></>}
                    </> :
                    <></>
                    }
                    { userType === "Manager" || userType === "Admin" ?
                    <>
                    {/* Place User Related Nav Links here ############################################## */}
                    <Box sx={{ flexGrow: 1 }} display="flex"  justifyContent="flex-end" >
                      <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
                        <Button sx={{borderRadius:"16px", color:"#00446E"}} variant="contained" color="secondary" startIcon={<LogoutIcon />} onClick={logout}>  
                          LOGOUT
                        </Button>
                      </NavLink>
                    </Box>
                    {/* END OF USER Related Nav Links here ############################################## */}
                    </> :
                    <></>
                    }

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar