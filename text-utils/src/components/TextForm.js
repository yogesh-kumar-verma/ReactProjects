import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text");
  const handleOnClick1 = () => {
    console.log("on click is presed");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnClick = () => {
    console.log("on click is presed");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("on change is used");
    setText(event.target.value);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);

    props.showAlert("Text Cleared!", "success");
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 container">
          <textarea
            style={{
              backgroundColor: props.darkMode === "dark" ? "grey" : "white",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleOnClick}>
            Convert into uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleOnClick1}>
            Convert into lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length}characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>

          <h2>preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
