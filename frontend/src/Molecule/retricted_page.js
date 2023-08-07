// Media Sources

import CorporatePhoto from "../media/homescreen.jpg";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import { useState, useEffect } from "react";

// Axios Import
import axios from "axios";

// Taskbar import
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

// Table Import
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { create } from "@mui/material/styles/createTransitions";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

// import Redux
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser, setSelectedEmail, setSelectedUserType } from "../features/userSlice"


/// This is main TaskViewer

function RestrictedPage() {
  const usernames = useSelector((state) => state.login);
  const workflowMap = useSelector((state) => state.workflow.workflow);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userType = useSelector((state) => state.login.userType);

  console.log(usernames)


    // dispatch(setSelectedUser(user_id));
    // dispatch(setSelectedEmail(user_email));
    // dispatch(setSelectedUserType(user_type));
    // navigate("/task_viewer_admin", { replace: true })
  

  // create a promise for the axios request

  return (
    <div
      style={{
        backgroundImage: `url(${CorporatePhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "100vh",
        alignContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
          borderRadius: "20px",
          backgroundColor: "white",
          marginTop: "10%",
          margin: "auto",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* This is the header of the TaskViewer */}
          {/* Align left */}
          <Container maxWidth="lg">
            <h1 style={{ textAlign: "left", marginTop: "50px" }}>This is a restricted page</h1>
            <p style={{ textAlign: "left" }}>
              
            </p>
          </Container>

        </Box>

      </div>
    </div>
  );
}

export default RestrictedPage;
