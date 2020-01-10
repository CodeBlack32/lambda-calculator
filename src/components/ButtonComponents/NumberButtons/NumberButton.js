import React from "react";

const NumberButton = (props) => {
  return (
    <button
      onClick={props.onClickHandler}> {props.number}
    </button>
  );

};

export default NumberButton;