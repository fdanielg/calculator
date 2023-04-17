import styles from "./styles.module.scss";
import { useState } from "react";

export default function Calculator() {
  const [number, setNumber] = useState<number | any>(0);
  const [oldNumber, setOldNumber] = useState<number | any>(0);
  const [operator, setOperator] = useState<string>("");

  const addNumber = (value: any) => {
    const newNumber = value.target.value;

    if (number === 0) {
      if (newNumber === ".") {
        setNumber("0.");
      } else {
        setNumber(newNumber);
      }
    } else {
      setNumber(number + newNumber);
    }
  };

  const clearNumber = () => {
    setNumber(0);
    setOldNumber(0);
    setOperator("");
  };

  const percentNumber = () => {
    const newNumber = number / 100;

    setNumber(newNumber);
  };

  const negativeNumber = () => {
    const newNumber = number * -1;

    setNumber(newNumber);
  };

  const handlerOperator = (value: any) => {
    const operator = value.target.value;

    setOperator(operator);
    setOldNumber(number);
    setNumber(0);
  };

  const calculate = () => {
    const result = Number(oldNumber) + Number(number);

    if (operator === "+") {
      setNumber(result);
      setOldNumber(result);
      setOperator("");
    } else if (operator === "-") {
      setNumber(oldNumber - number);
    } else if (operator === "*") {
      setNumber(oldNumber * number);
    } else if (operator === "/") {
      setNumber(oldNumber / number);
    }
  };

  const switchOperator = () => {
    if (operator === "+") {
      return "+";
    } else if (operator === "-") {
      return "-";
    } else if (operator === "*") {
      return "x";
    } else if (operator === "/") {
      return "÷";
    } else if (operator === "") {
      return "";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.valueWrapper}>
        <span>
          {!oldNumber && operator && <div style={{ marginRight: 4 }}>0</div>}
          <div style={{ marginRight: 4 }}>{switchOperator()}</div>
          {oldNumber === 0 ? "" : ` ${oldNumber}`}
          {""}
        </span>
        <p>{number}</p>
      </div>

      <div className={styles.buttonsWrapper}>
        <button className={styles.topButton} onClick={clearNumber}>
          AC
        </button>
        <button className={styles.topButton} onClick={negativeNumber}>
          +/-
        </button>
        <button className={styles.topButton} onClick={percentNumber}>
          %
        </button>
        <button className={styles.operator} onClick={handlerOperator} value="/">
          ÷
        </button>
        <button onClick={addNumber} value={7}>
          7
        </button>
        <button onClick={addNumber} value={8}>
          8
        </button>
        <button onClick={addNumber} value={9}>
          9
        </button>
        <button className={styles.operator} onClick={handlerOperator} value="*">
          x
        </button>
        <button onClick={addNumber} value={4}>
          4
        </button>
        <button onClick={addNumber} value={5}>
          5
        </button>
        <button onClick={addNumber} value={6}>
          6
        </button>
        <button className={styles.operator} onClick={handlerOperator} value="-">
          -
        </button>
        <button onClick={addNumber} value={1}>
          1
        </button>
        <button onClick={addNumber} value={2}>
          2
        </button>
        <button onClick={addNumber} value={3}>
          3
        </button>
        <button className={styles.operator} onClick={handlerOperator} value="+">
          +
        </button>
        <button className={styles.zeroButton} onClick={addNumber} value={0}>
          0
        </button>
        <button onClick={addNumber} value=".">
          .
        </button>
        <button className={styles.operator} onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
