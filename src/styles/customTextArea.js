export const mainContainer = {
  display: "flex",
  flexDirection: "column",
};

export const optionDrawer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

export const textContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

export const linesContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

export const editableLine = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  borderWidth: ".1rem",
  borderStyle: "solid",
  borderSpacing: 0,
};

export const firstEditableLine = {
  ...editableLine,
  borderBottom: 0,
};

export const lastEditableLine = {
  ...editableLine,
  borderTop: 0,
};

export const lineEditor = {
  flexGrow: 1,
  width: "100%",
  resize: "none",
  border: "none",
  outline: "none",
};
