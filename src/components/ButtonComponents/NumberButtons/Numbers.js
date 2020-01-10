import React, {useState} from "react";
//import any components needed
import NumberButton from "./NumberButton";
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import {numbers} from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);

  return (
    <div>
      {number.map( function (e) {
      return <NumberButton number={e} onClickHandler={ props.onClickHandler } ></NumberButton>
      })/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
