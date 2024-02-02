import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [length, setLength] = useState(3);
  const [text, setText] = useState();
  const [AllowNumber, setAllowNumber] = useState(false);
  const [AllowSymbol, setAllowSymbol] = useState(false);

  const passw = useCallback(() => {
    let pass = "";
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (AllowNumber) alpha += "1234567890";
    if (AllowSymbol) alpha += "`~!@#$%^&*()_+-'{}[]|?/><.,:;";
    for (let i = 1; i <= length; i++) {
      let rendom = Math.floor(Math.random() * alpha.length + 1);
      pass += alpha.charAt(rendom);
    }
    setText(pass);
  }, [length, setText, AllowNumber]);

	const passwordRef = useRef(null);
	
	const copyText = useCallback(() => {
		passwordRef.current?.select()
		window.navigator.clipboard.writeText(text)
	},[text])
  useEffect(() => {
    passw();
  }, [length, AllowNumber, AllowSymbol, passw]);
  return (
    <div className="app">
      <h2 className="head">Password Generator</h2>
      <div className="inp-box">
			  <input
				  type="text"
				  value={text}
				  className="inp"
				  readOnly
			  	 ref={passwordRef}
			  />
        <button onClick={copyText} className="copy-btn">copy</button>
      </div>
      <div className="details">
        <input
          type="range"
          min={0}
          max={16}
          value={length}
          className="range-inp"
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="">length:{length}</label>
        <input
          type="checkbox"
          className="number-check"
          defaultChecked={AllowNumber}
          onChange={() => setAllowNumber((prev) => !prev)}
        />
        <label htmlFor="">AllowNumber's</label>
        <input
          type="checkbox"
          className="symbol-check"
          defaultChecked={AllowSymbol}
          onChange={() => setAllowSymbol((prev) => !prev)}
        />
        <label htmlFor="">Allowsymbol's</label>
      </div>
    </div>
  );
};

export default App;
