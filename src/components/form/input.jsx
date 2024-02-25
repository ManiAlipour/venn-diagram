import FormContext from "../context/form";
import styles from "./index.module.css";
import { useContext } from "react";

const Input = ({ name, id, pls }) => {
  const c = useContext(FormContext);

  const regexInput = (value, id) => {
    const regex = /^[0-9-]+$/;
    if (regex.test(value))
      id === "set-1" ? c.setSetOneValue(value) : c.setSetTwoValue(value);
  };

  // Enter the value if the user input is a number
  const handleKey = (e) => {
    const { value, id } = e.target;
    const backward = "deleteContentBackward";

    // The value inside the text field cannot be anything but numbers 1 to 9 or -
    regexInput(value, id);

    if (e.nativeEvent.inputType === backward && value.length === 0) {
      id === "set-1"
        ? c.setSetOneValue(value.slice(0, value.length - 1))
        : c.setSetTwoValue(value.slice(0, value.length - 1));
    }
  };

  return (
    <>
      <input
        className={`${styles.input}`}
        placeholder={pls}
        type="text"
        required
        onChange={(e) => {
          handleKey(e);
        }}
        name={name}
        id={id}
        value={id === "set-1" ? c.setOneValue : c.setTwoValue}
      />
    </>
  );
};

export default Input;
