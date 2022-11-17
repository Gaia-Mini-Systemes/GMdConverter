import { useState, useEffect, useRef } from "react";
import * as DOMPurify from "dompurify";
import { marked } from "marked";

export default function App() {
  const textAreaEl = useRef(null);
  const mdPreview = useRef(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [convertedArea, setConvertedArea] = useState("");

  const appContainer = {
    display: "flex",
    flexDirection: "column",
  };

  const sConverterContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  };

  const sTextAreaContainer = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: ".5rem",
  };

  const sTextArea = {
    resize: "none",
    outline: "none",
    border: ".1rem solid",
    borderRadius: ".5rem",
    padding: "0.3rem 0.6rem",
  };

  useEffect(() => {
    setConvertedArea(marked.parse(textAreaValue));
    let cleanConvertedArea = DOMPurify.sanitize(convertedArea);
    mdPreview.current.innerHTML = cleanConvertedArea;
    // mdPreview.current.innerHTML = convertedArea;
    return () => {};
  }, [textAreaValue]);

  return (
    <div style={appContainer}>
      <div style={sConverterContainer}>
        <div style={sTextAreaContainer}>
          <label htmlFor="mdField">C'est ici le MD:</label>
          <textarea
            id="mdField"
            name="mdField"
            rows="20"
            wrap="off"
            ref={textAreaEl}
            onChange={() => {
              setTextAreaValue(textAreaEl.current.value);
            }}
            style={sTextArea}
          />
        </div>
        <div style={sTextAreaContainer}>
          <label htmlFor="mdField">La conversion:</label>
          <textarea
            id="mdField"
            name="mdField"
            rows="20"
            wrap="off"
            value={convertedArea}
            readOnly
            // ref={textAreaEl}
            // onChange={() => {
            //   setTextAreaValue(textAreaEl.current.value);
            // }}
            style={sTextArea}
          />
        </div>
      </div>
      <div ref={mdPreview}></div>
    </div>
  );
}
