import { ReactElement, useState } from "react";

interface Props {
  placeholder: string;
  name: string;
  overrideProps?: {};
  className?: string;
  type?: string;
  error?: string;
  preVal?: string;
}

export default function Input({
  placeholder,
  overrideProps = {},
  name,
  className = "",
  type = "text",
  error = "",
  preVal = "",
}: Props): ReactElement {
  const [inputValue, setInputValue] = useState(preVal);
  const [labelFocusOrFilled, setLabelFocusOrFilled] = useState(false);
  let handleInputFocus = () => {
    setLabelFocusOrFilled(true);
  };
  preVal.trim() && !labelFocusOrFilled ? setLabelFocusOrFilled(true) : "";
  return (
    <div className={`inputController ${error.trim() ? "hasError" : ""}`}>
      <label
        htmlFor={name}
        className={labelFocusOrFilled ? "labelFocusOrFilled" : ""}
      >
        {placeholder}
      </label>
      <input
        type={type}
        className={`inputText ${className}`}
        name={name}
        onFocus={handleInputFocus}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          !inputValue.trim() ? setLabelFocusOrFilled(false) : "";
        }}
        {...overrideProps}
      ></input>
      {error.trim() ? (
        <div className="errorMessage">{error.toString()}</div>
      ) : (
        ""
      )}
      <style jsx>{`
        .inputText {
          border: 2px solid rgb(185, 197, 250);
          height: 50px;
          border-radius: 5px;
          padding: 2% 3% 2% 3%;
          width: 100%;
          font-size: 16px;
          transition: all 0.3s easer;
          background-color: transparent;
          position: relative;
        }
        .inputText:focus {
          outline: none;
          border: 2px solid rgb(77, 109, 250);
        }
        .inputText:focus + label {
          color: rgb(77, 109, 250);
        }
        .inputText::placeholder {
          color: #b0bcca;
        }
        label {
          position: absolute;
          color: #b0bcca;
          font-size: 16px;
          margin: 1.2%;
          width: fit-content;
          transition: all 0.2s ease;
        }

        .labelFocusOrFilled {
          background: white !important;
          margin-top: -8px;
          z-index: 999;
          padding: 0 5px;
          color: rgb(51, 87, 248);
        }
        .hasError,
        .hasError input,
        .hasError label {
          color: rgb(250, 88, 77);
        }
        .hasError input {
          border: 2px solid rgb(250, 137, 129);
        }
        .hasError input:focus {
          border: 2px solid rgb(250, 88, 77);
        }
        .errorMessage {
          margin-left: 15px;
          margin-top: 2px;
          position: relative;
        }
        .errorMessage::before {
          content: "●";
          font-weight: bold;
          position: absolute;
          margin-left: -15px;
        }
      `}</style>
    </div>
  );
}
