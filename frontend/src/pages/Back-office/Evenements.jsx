import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";

export default function DashboardEvenement() {
  const [myEvenements, setMyEvenements] = useState([]);
  const [evenements, setEvenements] = useState({
    id: null,
    name: "",
    lieu: "",
    description: "",
    horaire_debut: "",
    horaire_fin: "",
    id_Professeur: null,
    photo: "",
    desc_photo: "",
  });

  useEffect(() => {
    apiConnection
      .get(`/evenements`)
      .then((evenementdata) => {
        setMyEvenements(evenementdata.data);
      })
      .catch((error) => console.error(error));
  }, []);
  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newEvenements = { ...evenements };
    newEvenements[place] = value;
    setEvenements(newEvenements);
  };

  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} eve
   */
  const handleOneEvenement = (eve) => {
    setEvenements(eve);
  };

  // // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  // const handleCancelButton = () => {
  //   setEvenements({
  //     id: null,
  //     Name: "",
  //     Icon: "",
  //     Description: "",
  //   });
  //   setReset(!reset);
  // };
  // useEffect(() => {
  //   getAllEvenements();
  // }, []);

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {/* SEARCHBAR */}
      <SearchBarTemplate
        data={myEvenements}
        customWidth="cstm_width_XlInput"
        searchBarContainer="flex flex-col items-center w-full relative"
        textPlaceholder="Search evenements"
        textButton="Show evenements"
        methodOnClick={handleOneEvenement}
      />
      {/* FORM ADD OPTION */}
      <div className="mt-10 flex flex-col items-center w-full gap-y-7">
        <InputTemplate
          textPlaceholder="Name"
          customWidth="cstm_width_XlInput"
          value={evenements.name}
          methodOnChange={handleInputOnChange}
          name="Name"
        />
        <InputTemplate
          textPlaceholder="Lieu"
          customWidth="cstm_width_XlInput"
          value={evenements.lieu}
          methodOnChange={handleInputOnChange}
          name="Lieu"
        />
        <TextareaTemplate
          textPlaceholder="Description"
          customWidth="cstm_width_XlInput"
          value={evenements.description}
          methodOnChange={handleInputOnChange}
          name="Description"
        />
        <InputTemplate
          textPlaceholder="Photo"
          customWidth="cstm_width_XlInput"
          value={evenements.photo}
          methodOnChange={handleInputOnChange}
          name="Photo"
        />
        <InputTemplate
          textPlaceholder="Description Photo"
          customWidth="cstm_width_XlInput"
          value={evenements.desc_photo}
          methodOnChange={handleInputOnChange}
          name="Description Photo"
        />
        <InputTemplate
          inputType="datetime-local"
          textPlaceholder="Heure de Début"
          customWidth="cstm_width_XlInput"
          value={evenements.horaire_debut}
          methodOnChange={handleInputOnChange}
          name="Heure de Début"
        />
        <InputTemplate
          inputType="datetime-local"
          textPlaceholder="Heure de Fin"
          customWidth="cstm_width_XlInput"
          value={evenements.horaire_fin}
          methodOnChange={handleInputOnChange}
          name="Heure de fin"
        />
      </div>
    </form>
  );
}
