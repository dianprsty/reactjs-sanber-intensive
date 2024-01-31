import { useState } from "react";
import styles from "./Timer.module.css";
import PropTypes from "prop-types";

const addZeroPrefix = (number) => {
  return number < 10 ? "0" + number : "" + number;
};

function Timer({ setVisible }) {
  const [now, setNow] = useState(new Date());
  const [countDown, setCountDown] = useState(100);

  useState(() => {
    let timer;
    timer = setInterval(() => {
      setNow(new Date());
      setCountDown((state) => state - 1);
    }, 1000);

    setTimeout(() => {
      setVisible(false);
      clearInterval(timer);
    }, 100000);

    return () => {
      clearInterval(timer);
    };
  }, [now, countDown]);

  return (
    <>
      <div className={styles.timer_card}>
        <p>
          Sekarang Jam - {addZeroPrefix(now.getHours())} :{" "}
          {addZeroPrefix(now.getMinutes())} : {addZeroPrefix(now.getSeconds())}
        </p>
        <p>Hitung Mundur : {countDown}</p>
      </div>
    </>
  );
}
Timer.propTypes = {
  setVisible: PropTypes.func,
};

export default Timer;
