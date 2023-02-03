import React, { useState, useEffect } from "react";
import apiConnection from "@services/apiConnection";
import { Link } from "react-router-dom";

import iconeLoupe from "@assets/loupe.png";
/*
SearchBarLoupe concerne la loupe dans la NavBar qui permet de faire une recherche de vidéo
*/
function SearchBarLoupe() {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      apiConnection
        .get(`/videos?search=${searchTerm}`)
        .then((videos) => setDatas(videos.data))
        .catch((error) => console.error(error));
    } else {
      setDatas([]);
    }
  }, [searchTerm]);

  return (
    <div className="flex justify-end items-center">
      <button type="button" onClick={() => setShow(!show)}>
        <img className="w-8 mr-2" src={iconeLoupe} alt="icone loupe" />
      </button>
      {show && (
        <form role="search">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-gray-900 rounded p-1"
          />
          <div className="absolute flex flex-col items-center gap-4 mr-5 md-mr-6 md-px-5 bg-primary/75 overflow-y-auto h-80">
            {datas.map((video) => {
              return (
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  key={video.Name}
                  className="hover:text-secondary"
                >
                  <Link to={`/videos/${video.id}`}>{video.Name}</Link>
                </button>
              );
            })}
          </div>
        </form>
      )}
    </div>
  );
}

export default SearchBarLoupe;
