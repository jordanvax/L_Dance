import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustmrSite from "@pages/Layout/CustmrSite";
import Home from "@pages/Home";
import NosEvenements from "@pages/NosEvenements";
import Evenement from "@pages/Evenement";
import Cours from "@pages/Cours";

import Dashboard from "@pages/Layout/Dashboard";
import DashboardEvenement from "@pages/Back-office/Evenements";
import DashboardProfesseurs from "@pages/Back-office/Professeur";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CustmrSite />}>
            <Route path="" element={<Home />} />
            <Route path="Cours" element={<Cours />} />
            <Route path="Evenements-à-venir" element={<NosEvenements />} />
            <Route path="Evenement" element={<Evenement />} />
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="Evenements" element={<DashboardEvenement />} />
            <Route path="Professeurs" element={<DashboardProfesseurs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
