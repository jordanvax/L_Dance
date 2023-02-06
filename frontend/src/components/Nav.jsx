import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-secondary transition ease transform duration-300`;
  const navigate = useNavigate();
  const navToPages = (link) => {
    setIsMenuDisplayed(false);
    navigate(link);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between h-24 pr-8 py-5 border-b border-b-4 border-secondary bg-white">
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
        {isMenuDisplayed && (
          <div className="flex justify-center py-5 bg-secondary z-10 mt-72 rounded-xl">
            <div className="flex flex-col items-center text-xl p-6">
              <button
                type="button"
                onClick={() => navToPages("/Cours")}
                className="text-white hover:scale-105 hover:font-bold text-2xl mb-5"
              >
                Cours
              </button>
              <button
                type="button"
                onClick={() => navToPages("/Evenements-à-venir")}
                className="text-white hover:scale-105 hover:font-bold text-2xl mb-5"
              >
                Evenement
              </button>
              <button
                type="button"
                onClick={() => navToPages("/Dashboard/Evenements")}
                className="text-white hover:scale-105 hover:font-bold text-2xl mb-5"
              >
                Evenements
              </button>
            </div>
          </div>
        )}
        <h1 className="text-secondary font-bold">Dashboard</h1>
      </div>
    </div>
  );
}
