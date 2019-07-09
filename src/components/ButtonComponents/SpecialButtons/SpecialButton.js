import React from "react";

export const SpecialButton = (props) => {
  return (
    <button style={ {
      background: '#225d9e', 
      color: '#ffffff',
      border: '1px solid #225d9e',
      width: '75px',
      height: '75px',
      borderRadius: '50%',
      margin: '10px'
    }}>
      {props.spec}
    </button>
  );
};
