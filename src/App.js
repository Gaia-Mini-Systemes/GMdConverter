import { useState, useEffect, useRef } from "react";
import * as DOMPurify from "dompurify";
import { marked } from "marked";
import {
  appContainer,
  sConverterContainer,
  sTextAreaContainer,
  sTextArea,
  sTextAreaFocused,
} from "./styles/mdConverter";
import CustomTextArea from "./components/CustomTextArea";

export default function App() {
  const textAreaEl = useRef(null);
  const mdPreview = useRef(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [convertedArea, setConvertedArea] = useState("");
  const [indentVal, setIndentVal] = useState(2);
  const [isFocus, setIsFocus] = useState(false);

  const handleKeyCode = (k) => {
    if (k.key === "Tab" && k.shiftKey) {
      k.preventDefault();
      console.log(textAreaEl.current.value);
      textAreaEl.current.value = textAreaEl.current.value.trim();
      handleIndentRemove();
      // textAreaEl.current.selectionStart -= indentVal;
      // textAreaEl.current.selectionEnd -= indentVal;
    } else if (!k.shiftKey && k.key === "Tab") {
      let currPos = textAreaEl.current.selectionStart;

      k.preventDefault();
      textAreaEl.current.value =
        textAreaEl.current.value.slice(0, textAreaEl.current.selectionStart) +
        handleIndentInsert() +
        textAreaEl.current.value.slice(textAreaEl.current.selectionStart);
      textAreaEl.current.selectionStart = currPos + indentVal;
      textAreaEl.current.selectionEnd = textAreaEl.current.selectionStart;
    }
  };

  const handleIndentInsert = () => {
    let str = "";

    for (let i = 0; i < indentVal; i++) {
      str += " ";
    }

    return str;
  };

  const handleIndentRemove = () => {
    let x = textAreaEl.current.selectionStart;
    let y = textAreaEl.current.selectionStart;
    let isRunning = true;

    while (isRunning) {
      if (textAreaEl.current.value.charAt(x) === " " || x === 0) {
        if (
          textAreaEl.current.value.charAt(y) === " " ||
          y === textAreaEl.current.value.length
        ) {
          isRunning = false;
        } else y++;
      } else x--;
    }

    console.log(textAreaEl.current.value.slice(x + 1, y));
  };

  useEffect(() => {
    setConvertedArea(marked.parse(textAreaValue));
    let cleanConvertedArea = DOMPurify.sanitize(convertedArea);
    mdPreview.current.innerHTML = cleanConvertedArea;
    return () => {};
  }, [textAreaValue, convertedArea]);

  return (
    <div style={appContainer}>
      <CustomTextArea />
      <div style={sConverterContainer}>
        <div style={sTextAreaContainer}>
          <label htmlFor="mdField">C'est ici le MD:</label>
          <textarea
            id="mdField"
            name="mdField"
            rows="20"
            wrap="off"
            ref={textAreaEl}
            autoFocus
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlurCapture={() => {
              setIsFocus(false);
            }}
            onChange={() => {
              setTextAreaValue(textAreaEl.current.value);
            }}
            onKeyDownCapture={(key) => {
              handleKeyCode(key);
            }}
            style={isFocus ? sTextAreaFocused : sTextArea}
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
