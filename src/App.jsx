import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputShortener from "./inputShortener";
import BackGround from "./BackGround";
import LinkResult from "./LinkResult";

function App() {

  const [inputValue,setInputValue] = useState("");
  return (
    <>
      <div className="container">
        <InputShortener setInputValue={setInputValue}/>  
        <BackGround/>
        <LinkResult inputValue={inputValue}/>
      </div>
    </>
  );
}

export default App;
