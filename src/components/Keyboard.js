import React from "react";

import Button from "./Button";

function Keyboard(props) {

    const keysArray = [
        "AC", "Del", "%", "/",
        "7", "8", "9","*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        ".", "0", "()", "=",
      ];

  const printCharacter = (char) => {
    props.printInDisplay(char);
  };

  return (
    <div className="keyboard-canvas">
      {keysArray.map((char) => (
        <Button key={char} character={char} printCharacter={printCharacter}/>
      ))}
    </div>
  );
}

export default Keyboard;
