// Media Sources

import CorporatePhoto from "../media/homescreen.jpg"
import Logo from "../media/logo.png"

import * as React from 'react';
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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';




// import Redux
import { useSelector, useDispatch } from 'react-redux';
// Import the functions that you will need:
import {setglobalusername, setglobalpassword, setname, setuserType} from "../features/loginSlice"
import { margin } from "@mui/system";
import { setworkflow } from "../features/workflowSlice";
// import { setlogindetails } from '../features/loginSlice'

function Home() {
    // UseDispatch 
    const dispatch = useDispatch();
    let navigate = useNavigate()


    // Local Variables 
    const [username, setusername] = useState("")
    const [password , setpassword] = useState("")

    console.log("This is home page")

    // Calling the database: 
    const signin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/user/login",{"username" : username, "password": password})
            console.log(response.data.userType)
            dispatch(setglobalusername(response.data.username))
            dispatch(setglobalpassword(response.data.password))
            dispatch(setuserType(response.data.userType))
            dispatch(setname(response.data.name))
            navigate("/task_viewer",{replace: true})

        }
        catch(error) {
            console.log(error)
            alert("Log in failed")

        }

    }


    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };


    return (
        <div style={{ 
            backgroundImage: `url(${CorporatePhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            minHeight: '100vh',
            alignContent:"center",
            alignItems:"center",
            display:'flex'
            }}>

            <div style={{width: '60%',height: '65%',borderRadius: '20px',backgroundColor: 'rgba(245, 245, 245, 0.99)',marginTop: '10%', marginBottom: '10%',margin:"auto"}}>
                {/* Your other content goes here */}
                <Grid container>
                    <Grid item xs={12}>
                        <img src={Logo} style={{width: '320px',height: '80px', marginTop: '5%',marginBottom: '-5%', marginRight:"1%"}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" marginTop={"5%"} color="grey">Onboarding Portal</Typography>
                    </Grid>
                    <Grid container marginTop={"3%"}>
                        <Grid item xs={1} md={3}></Grid>
                        <Grid item xs={10} md={6}>
                        <Typography variant="h6" align={"left"} marginTop={"2%"}>Admin or Vendor Login</Typography>
                            <TextField fullWidth id="outlined-basic" label="Username" variant="filled" onChange={event => setusername(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter') {signin();}}}/>
                            {
                                username.length > 1 && username.length <5 
                                ?
                                <Typography color={"red"}>Invalid Username</Typography>
                                :
                                <Typography></Typography>
                            }
                        </Grid>
                        <Grid item xs={1} md={3}></Grid>
                    </Grid>
                    <Grid container marginTop={"5%"}>
                        <Grid item xs={1} md={3}></Grid>
                        <Grid item xs={10} md={6}>
                        {/* <TextField fullWidth id="outlined-basic" label="Password" variant="filled" onChange={(event) => setpassword(event.target.value)} onKeyDown={(event) => {if (event.key === 'Enter') {signin();}}}/> */}
                        <TextField
                        fullWidth
                        label="Password"
                        variant="filled"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        onKeyDown={(event) => {if (event.key === 'Enter') {signin();}}}
                        />
                        </Grid>
                        <Grid item xs={1} md={3}></Grid>
                    </Grid>

                    <Grid container marginTop={"5%"} marginBottom={"5%"}> 
                        <Grid item xs={1} md={4}></Grid>
                            <Grid item xs={10} md={4}>
                                <Button fullWidth variant="contained" color="primary" onClick={() => signin()}>
                                Log In</Button>
                            </Grid>
                        <Grid item xs={1} md={4}></Grid>
                    </Grid>

                </Grid>

            </div>
        </div>
    );
}

export default Home;