import React, { useState } from "react";

const InputShortener = ({setInputValue}) => {

  const [value,setValue] = useState("");
  const handleClick = ()=>{
    setInputValue(value);
    setValue("");
  }
  return (
    <> 
      <div className="inputContainer">
      <h1>URL <span>shortener</span></h1>
      <div>
        <input type='text'
        value={value} 
        placeholder="paste a link to shorten"
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>

      </div>
    </>
  );
};

export default InputShortener;
