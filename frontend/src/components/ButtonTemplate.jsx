/* eslint-disable react/prop-types */
import React from "react";

function ButtonTemplate({
  buttonType,
  buttonText,
  buttonStyle,
  methodOnClick,
}) {
  return (
    <div>
      <button
        // eslint-disable-next-line react/button-has-type
        type={buttonType}
        onClick={methodOnClick}
        className={`${buttonStyle}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonTemplate;
