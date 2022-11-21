export const appContainer = {
  display: "flex",
  flexDirection: "column",
};

export const sConverterContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
};

export const sTextAreaContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: ".5rem",
};

export const sTextArea = {
  resize: "none",
  outlineStyle: "none",
  borderWidth: ".1rem",
  borderStyle: "solid",
  borderRadius: ".5rem",
  borderColor: "black",
  padding: "0.3rem 0.6rem",
  whiteSpace: "pre-wrap",
};

export const sTextAreaFocused = {
  ...sTextArea,
  borderColor: "dodgerblue",
};
