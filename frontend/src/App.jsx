import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustmrSite from "@pages/Layout/CustmrSite";
import Home from "@pages/Home";
import Evenement from "@pages/Evenement";
import Cours from "@pages/Cours";

import Dashboard from "@pages/Layout/Dashboard";
import DashboardEvenement from "@pages/Back-office/Evenements";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CustmrSite />}>
            <Route path="" element={<Home />} />
            <Route path="Cours" element={<Cours />} />
            <Route path="Evenement" element={<Evenement />} />
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="Evenements" element={<DashboardEvenement />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
