import React, { useState } from "react";
import { numbers } from '../../../data'
import { NumberButton, ZeroButton } from './NumberButton'

//import any components needed

//Import your array data to from the provided data file

export const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [nums, setNums] = useState(numbers)
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '300px'
    }}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/nums.map((num) => {return <NumberButton num={num} setTotal={props.setTotal} />})}
    </div>
  );
};
