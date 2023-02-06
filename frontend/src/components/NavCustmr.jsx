import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoLDance from "@assets/Logo_LDance.svg";
import SearchBarLoupe from "./SearchBarLoupe";

function NavCustmr() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-secondary transition ease transform duration-300`;
  const navigate = useNavigate();
  const navToPages = (link) => {
    setIsMenuDisplayed(false);
    navigate(link);
  };

  return (
    // Si on est dirigé vers le dashboard, la nav disparraît
    <nav className="flex flex-col text-white fixed lg:px-0 top-0 w-full bg-white md:bg-primary/0 md:bg-gradient-to-b md:from-primary md:h-35 lg:w-full">
      {/* Version Mobile */}
      <ul className="md:hidden flex justify-between border-b-4 border-secondary bg-white">
        <button
          onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}
          type="button"
          className="ml-6"
        >
          <div
            className={`${genericHamburgerLine} ${
              isMenuDisplayed
                ? "rotate-45 translate-y-2 opacity-95 group-hover:opacity-100"
                : "opacity-95 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isMenuDisplayed
                ? "opacity-0"
                : "opacity-95 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isMenuDisplayed
                ? "-rotate-45 -translate-y-2 opacity-95 group-hover:opacity-100"
                : "opacity-95 group-hover:opacity-100"
            }`}
          />
        </button>
        <Link className="flex items-center" to="/">
          <img className="w-20" src={logoLDance} alt="logo origins" />
        </Link>
        <SearchBarLoupe />
      </ul>
      {isMenuDisplayed && (
        <div className="flex justify-center self-center py-5 w-screen">
          <div className="flex flex-col items-center text-xl">
            <button
              type="button"
              onClick={() => navToPages("/Cours")}
              className="text-secondary hover:scale-105 hover:font-bold text-2xl mb-5"
            >
              Cours
            </button>
            <button
              type="button"
              onClick={() => navToPages("/Evenements-à-venir")}
              className="text-secondary hover:scale-105 hover:font-bold text-2xl mb-5"
            >
              Evenement
            </button>
            <button
              type="button"
              onClick={() => navToPages("/Dashboard/Evenements")}
              className="text-secondary hover:scale-105 hover:font-bold text-2xl mb-5"
            >
              Evenements
            </button>
          </div>
        </div>
      )}
      {/* Version Desktop */}
      <ul className="hidden md:flex justify-center fixed text-secondary z-10 absolute bg-white border-b-4 border-secondary lg:w-full">
        <div className="flex justify-between gap-4 items-center text-2xl">
          <div>
            <Link className="flex items-center mr-60 pr-60" to="/">
              <img className="w-28" src={logoLDance} alt="logo origins" />
            </Link>
          </div>
          <div className="flex flex-row justify-around flex-ml-96">
            <Link to="/Cours" className="mx-8">
              Cours
            </Link>
            <Link to="/Evenements-à-venir" className="mx-8">
              Evenements-à-venir
            </Link>
            <Link to="/Evenement" className="mx-8">
              Evenement
            </Link>
            <Link to="Dashboard/Evenements" className="mx-8">
              Dashboard
            </Link>
            <SearchBarLoupe />
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavCustmr;
