/* eslint-disable react/prop-types */
import React from "react";
/* 
textPlaceholder : infos à mettre dans les placeholder des inputs
customWidth : la classe CSS qui gère la largeur des input
value: la valeur des inputs qu'on reçoit en props
methodOnChange : les fonctions associées aux input qu'on reçoit en props
name: ici on reçoit en props le nom du champs de la table qu'on veut modifier
*/
function InputTemplate({
  textPlaceholder,
  customWidth,
  value,
  methodOnChange,
  name,
  inputType,
}) {
  return (
    <label className={`cstm_styleInput ${customWidth}`}>
      <input
        className="focus:outline-none w-full bg-white"
        type={inputType}
        placeholder={textPlaceholder}
        value={value}
        onChange={(e) => methodOnChange(e.target.name, e.target.value)}
        name={name}
      />
    </label>
  );
}

export default InputTemplate;
