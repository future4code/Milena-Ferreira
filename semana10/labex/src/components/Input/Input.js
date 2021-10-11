import React from "react";

function Input(props) {
  return (
    <div>
      <p>{props.text}:</p>
      <input placeholder="R$" />
    </div>
  );
}

export default Input;
