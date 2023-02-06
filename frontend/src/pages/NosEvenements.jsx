import React, { useEffect, useState } from "react";
import apiConnection from "@services/apiConnection";

export default function NosEvenements() {
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
    <div className="lg:mt-40">
      <h1 className="text-center font-bold text-3xl pt-8 pb-4">
        Evénèments à venir :
      </h1>
      <div className="w-full flex flex-col justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 lg:mx-24">
          {evenements?.map((evenement) => (
            <div className="flex flex-col border-2 my-6 lg:mx-16 items-center bg-secondary text-white rounded-2xl shadow-xl">
              <div className="font-bold text-xl mt-4">{evenement.name}</div>
              <div className="my-3">{evenement.lieu}</div>
              <img
                src={evenement.photo}
                alt={evenement.desc_photo}
                className="w-80 h-52 lg:w-96 lg:h-60"
              />
              <div className="mx-4 text-center">
                <div className="my-4">{evenement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
