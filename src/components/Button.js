import React from "react";

function Button(props) {

  if (props.character === "=")
    return (
      <button className="calculator-button colored" onClick={() => props.printCharacter(props.character)}>
          {props.character}
      </button>
    );
  else return(
    <button className="calculator-button" onClick={() => props.printCharacter(props.character)}>
        {props.character}
    </button>
  );
}

export default Button;
