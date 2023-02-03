import React from "react";
import { Outlet } from "react-router-dom";

import NavCustmr from "@components/NavCustmr";
import Footer from "@components/Footer";

function CustmrSite() {
  return (
    <div>
      <NavCustmr />
      <Outlet />
      <Footer />
    </div>
  );
}

export default CustmrSite;
