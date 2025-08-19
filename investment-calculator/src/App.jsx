import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";


function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputIsValid = userInputs.duration>=1;

  function onInputChange(inputIdentifier, newValue) {
    setUserInputs((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput onSelect={onInputChange} userInputs={userInputs}/>
      {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>} 
      { inputIsValid && <Result inputs={userInputs}/>}
    </>
  );
}

export default App;
