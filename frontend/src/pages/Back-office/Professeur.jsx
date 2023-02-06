/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import apiConnection from "@services/apiConnection";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

export default function Evenement() {
  const [myProfesseurs, setMyProfesseurs] = useState([]);
  const [reset, setReset] = useState(false);
  const [professeurs, setProfesseurs] = useState({
    id: null,
    name: "",
    style: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  // Fonction qui récupères tout les professeurs
  const getAllProfesseurs = () => {
    apiConnection
      .get(`/professeurs`)
      .then((professeursdata) => {
        setMyProfesseurs(professeursdata.data);
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newProfesseurs = { ...professeurs };
    newProfesseurs[place] = value;
    setProfesseurs(newProfesseurs);
  };

  // La fonction pre-rempli les input quand on clique sur un professeur dans la searchBar
  /**
   * @param {object} cat
   */
  const handleOneProfesseurs = (prof) => {
    setProfesseurs(prof);
  };

  // Fonction qui gère l'ajout d'un nouveaux professeur
  const handleAddProfesseurs = () => {
    delete professeurs.id;
    apiConnection
      .post(`/professeurs`, {
        ...professeurs,
      })
      .then((professeur) => {
        notify("Le Professeur a bien été ajouté!");
        setProfesseurs(professeur.data);
        getAllProfesseurs();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la suppression d'un professeur
  const handleDeleteProfesseurs = () => {
    apiConnection
      .delete(`/professeurs/${professeurs.id}`)
      .then(() => {
        setProfesseurs({
          id: null,
          name: "",
          style: "",
        });
        notify("Professeur supprimer !");
        setReset(!reset);
        getAllProfesseurs();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la modification d'un professeur
  const handleUpdateProfesseurs = () => {
    const { name, style } = professeurs;
    apiConnection
      .put(`/professeurs/${professeurs.id}`, {
        name,
        style,
      })
      .then(() => {
        notify("Professeur a bien été modifier");
        getAllProfesseurs();
      })
      .catch((error) => console.error(error));
  };

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  const handleCancelButton = () => {
    setProfesseurs({
      id: null,
      name: "",
      style: "",
    });
    setReset(!reset);
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllProfesseurs();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="flex flex-col items-center w-full pt-10 gap-y-7">
        {/* SEARCHBAR */}
        <SearchBarTemplate
          reset={reset}
          data={myProfesseurs}
          customWidth="cstm_width_XlInput"
          searchBarContainer="flex flex-col items-center w-full relative"
          textPlaceholder="Search professeurs"
          textButton="Show professeurs"
          methodOnClick={handleOneProfesseurs}
        />
        {/* FORM ADD OPTION */}
        <div className="mt-10 flex flex-col items-center w-full gap-y-7">
          <InputTemplate
            textPlaceholder="Nom De L'événement"
            customWidth="cstm_width_XlInput"
            value={professeurs.name}
            methodOnChange={handleInputOnChange}
            name="name"
          />
          <InputTemplate
            textPlaceholder="Style De Danse"
            customWidth="cstm_width_XlInput"
            value={professeurs.style}
            methodOnChange={handleInputOnChange}
            name="style"
          />
          <div className="flex justify-around space-x-8 pt-5">
            {!professeurs.id && (
              <ButtonTemplate
                buttonType="button"
                buttonText="ADD"
                buttonStyle="cstm_buttonSecondaryNone"
                methodOnClick={handleAddProfesseurs}
              />
            )}
            {professeurs.id && (
              <>
                <ButtonTemplate
                  buttonType="button"
                  buttonText="UPDATE"
                  buttonStyle="cstm_buttonSecondary"
                  methodOnClick={handleUpdateProfesseurs}
                />
                <ButtonTemplate
                  buttonType="button"
                  buttonText="DELETE"
                  buttonStyle="cstm_buttonSecondary"
                  methodOnClick={handleDeleteProfesseurs}
                />
              </>
            )}
            <ButtonTemplate
              methodOnClick={handleCancelButton}
              buttonType="button"
              buttonText="CANCEL"
              buttonStyle="cstm_buttonSecondaryNone"
            />
          </div>
        </div>
      </form>
    </>
  );
}
