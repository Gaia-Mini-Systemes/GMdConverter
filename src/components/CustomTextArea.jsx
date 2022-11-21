import {
  mainContainer,
  optionDrawer,
  textContainer,
  editableLine,
  firstEditableLine,
  lineEditor,
  lastEditableLine,
} from "../styles/customTextArea";

export default function CustomTextArea() {
  return (
    <div style={mainContainer}>
      <div style={optionDrawer}>TopBar</div>
      <div style={textContainer}>
        <div style={{ editableLine, ...firstEditableLine }}>
          <span>1</span>
          <textarea rows="1" cols="80" style={lineEditor} />
        </div>
        <div style={editableLine}>
          <span>1</span>
          <textarea rows="1" cols="80" style={lineEditor} />
        </div>
        <div style={{ editableLine, ...lastEditableLine }}>
          <span>1</span>
          <textarea rows="1" cols="80" style={lineEditor} />
        </div>
      </div>
    </div>
  );
}
