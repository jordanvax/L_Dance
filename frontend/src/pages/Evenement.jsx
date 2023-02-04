import React, { useEffect, useState } from "react";
import apiConnection from "@services/apiConnection";

export default function Evenement() {
  const [evenements, setEvenements] = useState();

  useEffect(() => {
    apiConnection
      .get(`/evenements`)
      .then((evenementdata) => {
        setEvenements(evenementdata.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-8 pb-4">
        Evenements a venir :
      </h1>
      <div className="px-2 w-full flex justify-center ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {evenements?.map((evenement) => (
            <div>
              <div>{evenement.name}</div>
              <img src={evenement.photo} alt={evenement.desc_photo} />
              <div>{evenement.lieu}</div>
              <div>{evenement.description}</div>
              <div>{evenement.horaire_debut}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
