import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// File Depencies
import Navbar from "./Molecule/navbar";
import Home from "./Molecule/home";
import TaskViewer from "./Molecule/task_viewer";
import TaskViewerAdmin from "./Molecule/task_viewer_admin";
import RestrictedPage from "./Molecule/retricted_page";

// Protected Routes
import ProtectedRoutesforAdmin from "./protectedroutes/ProtectedRoutesforAdmin";
import ProtectedRoutesforUser from "./protectedroutes/ProtectedRoutesforUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Swap this part out for testing */}
        <Route path="/" element={<Home />} />
        
        
        {/* Swap this part out for testing */}

        <Route element={<ProtectedRoutesforUser />}>

          <Route path="/task_viewer" exact element={<TaskViewer />} />
          

          <Route element={<ProtectedRoutesforAdmin />}>
            {/* Place Here for Admin */}
            <Route path="/task_viewer_admin" element={<TaskViewerAdmin />} />
            <Route path="/restricted_page" element={<RestrictedPage />} />

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
