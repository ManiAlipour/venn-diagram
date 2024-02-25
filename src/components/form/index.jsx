import FormContext from "../context/form";
import VennContext from "../context/venn";
import Input from "./input";
import { useContext, useState } from "react";
import styles from "./index.module.css";

const FormControles = () => {
  const [setOneValue, setSetOneValue] = useState("");
  const [setTwoValue, setSetTwoValue] = useState("");
  const c = useContext(VennContext);

  // Converting user input into an array of numbers
  const strToArray = (set) => {
    let setA = set.split("-");
    setA = setA.map(Number);
    return setA;
  };

  // Handle user authentication and send values ​​to state
  const handleSubmit = (e) => {
    e.preventDefault();
    const set_a = e.target[0].value;
    const set_b = e.target[1].value;

    const setA = strToArray(set_a);
    const setB = strToArray(set_b);
    c.setVennData([setA, setB]);
    c.setVenn(true);
  };

  return (
    <div className={styles.formContainer}>
      <div className={`${styles.titleDesc}`}>
        <h1 className={`${styles.title}`}>نمودار ون</h1>
        <p className={`${styles.desc}`}>اعداد مورد نظر خود را وارد کنید.</p>
      </div>
      <form className={`${styles.form}`} onSubmit={(e) => handleSubmit(e)}>
        <FormContext.Provider
          value={{
            setOneValue,
            setSetOneValue,
            setTwoValue,
            setSetTwoValue,
          }}
        >
          <label className={`${styles.leble}`} htmlFor="set-1">
            ست اول
          </label>
          <Input pls="اعداد را وارد کنید" id="set-1" name="setOne" />
          <label htmlFor="set-2" className={`${styles.leble}`}>
            ست دوم
          </label>
          <Input pls="اعداد را وارد کنید" id="set-2" name="setTwo" />
        </FormContext.Provider>
        <button className={`${styles.subBtn}`}>تایید</button>
      </form>
      <div>
        <span className={`${styles.points}`}>
          <b>نکته:</b> اعداد مورد نظر خود را با (-) از هم جدا کنید برای مثال :{" "}
          <br />
          2-3-6-4-1
        </span>
      </div>
    </div>
  );
};

export default FormControles;
