import React from "react";

export const Display = (props) => {
  return <div style={{
      background: '#000000', 
      color: '#ffffff',
      border: '1px solid #000000',
      width: '275px',
      height: '75px',
      borderRadius: '0%',
      margin: '10px'
  }}>{props.total}</div>;
};
