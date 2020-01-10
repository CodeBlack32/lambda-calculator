import React from "react";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

const Display = (props) => {
  return <div className="display">{props.outputs}</div>;
};

export default Display