import React from "react";

export const OperatorButton = (props) => {
  return (
    <button style={{
    background: '#184379', 
    color: '#ffffff',
    border: '1px solid #184379',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    margin: '10px'
    }  } onClick={() => {props.setOp(props.value)}}>
      {props.op}
    </button>
  );
};
