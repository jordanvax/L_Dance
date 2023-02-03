/* eslint-disable react/prop-types */
import React from "react";

function TextareaTemplate({
  textPlaceholder,
  customWidth,
  value,
  methodOnChange,
  name,
}) {
  return (
    <textarea
      className={`cstm_styleInput ${customWidth}`}
      placeholder={textPlaceholder}
      value={value}
      onChange={(e) => methodOnChange(e.target.name, e.target.value)}
      name={name}
      rows="5"
    />
  );
}

export default TextareaTemplate;
