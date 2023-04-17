import Calculator from "../Calculator";
import styles from "./styles.module.scss";

export default function HomeScreen() {
  return (
    <div className={styles.container}>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}
