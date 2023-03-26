import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("Text changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="textBox" className="form-label">
          Enter Your text
        </label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textBox"
          rows="7"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to upparcase
        </button>
      </div>
    </div>
  );
}
