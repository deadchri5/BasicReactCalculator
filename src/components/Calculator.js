import React, {useState} from "react";

//Import Calculator Controls
import Display from "./Display";
import Keyboard from "./Keyboard";

//Import Controls
import Operations from "../controllers/Operations";

function Calculator() {

  const [displayStr, setDisplayStr] = useState('');
  const [parenthesisFlag, setParenthesisFlag] = useState(false);

  const printInDisplay = (char) => {
      if (char === "AC") {
          setDisplayStr("");
          setParenthesisFlag(false);
      }
      else if (char === "()") {
        if (parenthesisFlag) {
            setDisplayStr(displayStr + ")");
            setParenthesisFlag(!parenthesisFlag);
        }
        else {
            setDisplayStr(displayStr + "(");
            setParenthesisFlag(!parenthesisFlag);
        }
      }
      else if (char === "Del") {
          let lastChar = displayStr.substr(displayStr.length-1);
          if (lastChar === "(" || lastChar === ")") {
            setParenthesisFlag(!parenthesisFlag);
          }
          setDisplayStr(displayStr.slice(0, -1));
      }
      else if (char === "=") {
          setDisplayStr(Operations.calculateResult(displayStr));
      }
      else {
        setDisplayStr(displayStr + char);
      }
  };

  return (
    <section id="calculator" className="calculator">
      <Display result={displayStr} />
      <Keyboard printInDisplay={printInDisplay} />
    </section>
  );
}

export default Calculator;
