/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

import apiConnection from "@services/apiConnection";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import validateEvenements from "@services/evenementsValidators";

import "react-toastify/dist/ReactToastify.css";

export default function DashboardEvenement() {
  const [myEvenements, setMyEvenements] = useState([]);
  const [myProfesseurs, setMyProfesseurs] = useState([]);
  const [reset, setReset] = useState(false);
  const [evenements, setEvenements] = useState({
    id: null,
    name: "",
    lieu: "",
    description: "",
    horaire_debut: new Date().toISOString().slice(0, 16),
    horaire_fin: new Date().toISOString().slice(0, 16),
    id_Professeurs: null,
    photo: "",
    desc_photo: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  // Fonction qui récupères tout les evenements

  const getAllEvenements = () => {
    apiConnection
      .get(`/evenements`)
      .then((evenementdata) => {
        setMyEvenements(evenementdata.data);
      })
      .catch((error) => console.error(error));
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
    const newEvenements = { ...evenements };
    newEvenements[place] = value;
    setEvenements(newEvenements);
  };

  // La fonction pre-rempli les input quand on clique sur un proffesseur dans la searchBar
  /**
   * @param {object} eve
   */
  const handleOneEvenement = (eve) => {
    setEvenements(eve);
  };

  const handleProfesseurEvenements = (professeurEvenements) => {
    handleInputOnChange("id_Professeurs", professeurEvenements.id);
  };

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  const handleCancelButton = () => {
    setEvenements({
      id: null,
      name: "",
      lieu: "",
      description: "",
      horaire_debut: null,
      horaire_fin: null,
      id_Professeur: null,
      photo: "",
      desc_photo: "",
    });
    setReset(!reset);
  };

  useEffect(() => {
    getAllEvenements();
    getAllProfesseurs();
  }, []);

  // Fonction qui gère l'ajout d'un nouvel evenements
  const handleAddEvenements = () => {
    delete evenements.id;
    const horaireDebut = moment(evenements.horaire_debut).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    const horaireFin = moment(evenements.horaire_fin).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    const newEvenements = {
      ...evenements,
      horaire_debut: horaireDebut,
      horaire_fin: horaireFin,
    };
    const { status, errorMessage } = validateEvenements(newEvenements);
    if (status) {
      apiConnection
        .post(`/evenements`, {
          ...newEvenements,
        })
        .then((evenement) => {
          setEvenements(evenement.data);
          getAllEvenements();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  // Fonction qui gère la suppression d'une catégorie
  const handleDeleteEvenements = () => {
    apiConnection
      .delete(`/evenements/${evenements.id}`)
      .then(() => {
        setEvenements({
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
        notify("Evenement supprimer !");
        setReset(!reset);
        getAllEvenements();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la modification d'une catégorie
  const handleUpdateEvenements = () => {
    const { status, errorMessage } = validateEvenements(evenements);
    const {
      name,
      lieu,
      description,
      horaire_debut,
      horaire_fin,
      id_Professeurs,
      photo,
      desc_photo,
    } = evenements;
    if (status) {
      apiConnection
        .put(`/evenements/${evenements.id}`, {
          name,
          lieu,
          description,
          horaire_debut,
          horaire_fin,
          id_Professeurs,
          photo,
          desc_photo,
        })
        .then(() => {
          notify("evenements est bien modifier!");
          getAllEvenements();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllEvenements();
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
            textPlaceholder="Nom De L'événement"
            customWidth="cstm_width_XlInput"
            value={evenements.name}
            methodOnChange={handleInputOnChange}
            name="name"
          />
          <InputTemplate
            textPlaceholder="Lieu"
            customWidth="cstm_width_XlInput"
            value={evenements.lieu}
            methodOnChange={handleInputOnChange}
            name="lieu"
          />
          <TextareaTemplate
            textPlaceholder="Description De L'événement"
            customWidth="cstm_width_XlInput"
            value={evenements.description}
            methodOnChange={handleInputOnChange}
            name="description"
          />
          <InputTemplate
            textPlaceholder="Photo D'illustration De L'événement"
            customWidth="cstm_width_XlInput"
            value={evenements.photo}
            methodOnChange={handleInputOnChange}
            name="photo"
          />
          <InputTemplate
            textPlaceholder="Description Photo"
            customWidth="cstm_width_XlInput"
            value={evenements.desc_photo}
            methodOnChange={handleInputOnChange}
            name="desc_photo"
          />
          <InputTemplate
            inputType="datetime-local"
            textPlaceholder="Heure de Début"
            customWidth="cstm_width_XlInput"
            value={new Date(evenements.horaire_debut)
              .toISOString()
              .slice(0, 16)}
            methodOnChange={handleInputOnChange}
            name="horaire_debut"
          />
          <InputTemplate
            inputType="datetime-local"
            textPlaceholder="Heure de Fin"
            customWidth="cstm_width_XlInput"
            value={new Date(evenements.horaire_fin).toISOString().slice(0, 16)}
            methodOnChange={handleInputOnChange}
            name="horaire_fin"
          />
          <SearchBarTemplate
            data={myProfesseurs}
            customWidth="cstm_width_XlInput"
            searchBarContainer="flex flex-col items-center w-full relative"
            textPlaceholder="Liste Professeurs"
            textButton="Liste Professeurs"
            methodOnClick={handleProfesseurEvenements}
            preSelectedValue={evenements.id_Professeurs}
          />
          <div className="flex justify-around space-x-8 pt-5">
            {!evenements.id && (
              <ButtonTemplate
                buttonType="button"
                buttonText="ADD"
                buttonStyle="cstm_buttonSecondaryNone"
                methodOnClick={handleAddEvenements}
              />
            )}
            {evenements.id && (
              <>
                <ButtonTemplate
                  buttonType="button"
                  buttonText="UPDATE"
                  buttonStyle="cstm_buttonSecondary"
                  methodOnClick={handleUpdateEvenements}
                />
                <ButtonTemplate
                  buttonType="button"
                  buttonText="DELETE"
                  buttonStyle="cstm_buttonSecondary"
                  methodOnClick={handleDeleteEvenements}
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
