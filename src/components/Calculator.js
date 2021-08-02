import React, { useState } from "react";

//Import Calculator Components
import Display from "./Display";
import Keyboard from "./Keyboard";

//Import Controls
import Operations from "../controllers/Operations";

function Calculator() {
  const [displayStr, setDisplayStr] = useState("");
  const [parenthesisFlag, setParenthesisFlag] = useState(false);
  const [anotherExprFlag, setAnotherExpFlag] = useState(false);

  const printInDisplay = (char) => {
    //Comprobate if the user will type another operation.
    //If it is, the last number have to be deleted.
    if (anotherExprFlag) {
      if (!checkifUserWillTypeAnotherOperation(char)) {
        setDisplayStr("" + char);
      } else {
        calculatorKeySentences(char);
      }
      setAnotherExpFlag(false);
    } else {
      calculatorKeySentences(char);
    }
  };

  const calculatorKeySentences = (char) => {
    //Calculator key sentences.
    if (char === "AC") {
      setDisplayStr("");
      setParenthesisFlag(false);
    } else if (char === "()") {
      if (parenthesisFlag) {
        setDisplayStr(displayStr + ")");
        setParenthesisFlag(!parenthesisFlag);
      } else {
        setDisplayStr(displayStr + "(");
        setParenthesisFlag(!parenthesisFlag);
      }
    } else if (char === "Del") {
      let lastChar = displayStr.substr(displayStr.length - 1);
      if (lastChar === "(" || lastChar === ")") {
        setParenthesisFlag(!parenthesisFlag);
      }
      setDisplayStr(displayStr.slice(0, -1));
    } else if (char === "=") {
      setAnotherExpFlag(true);
      setDisplayStr(Operations.calculateResult(displayStr));
    } else {
      setDisplayStr(displayStr + char);
    }
  };

  const checkifUserWillTypeAnotherOperation = (char) => {
    let regexOnlyNumbers = /^\d+$/;
    if (!regexOnlyNumbers.test(char)) return true;
    return false;
  };

  return (
    <section id="calculator" className="calculator">
      <Display result={displayStr} />
      <Keyboard printInDisplay={printInDisplay} />
    </section>
  );
}

export default Calculator;
