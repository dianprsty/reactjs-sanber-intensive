import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { BuahContext } from "../../App";

const NavBar = () => {
  const { color } = useContext(BuahContext);
  return (
    <>
      <header className={styles.header} style={{ backgroundColor: color }}>
        <nav>
          <ul>
            <li>
              <Link
                className={color == "#FFFFFF" ? styles.dark : styles.light}
                to="/"
              >
                Form
              </Link>
            </li>
            <li>
              <Link
                className={color == "#FFFFFF" ? styles.dark : styles.light}
                to="/tabel"
              >
                Tabel
              </Link>
            </li>
            <li>
              <Link
                className={color == "#FFFFFF" ? styles.dark : styles.light}
                to="/timer"
              >
                Timer
              </Link>
            </li>
            <li>
              <Link
                className={color == "#FFFFFF" ? styles.dark : styles.light}
                to="/axios"
              >
                Axios
              </Link>
            </li>
            <li>
              <Link
                className={color == "#FFFFFF" ? styles.dark : styles.light}
                to="/context"
              >
                Context
              </Link>
            </li>
            <li>
              <Link
                className={color == "#FFFFFF" ? styles.dark : styles.light}
                to="/router"
              >
                Change Color
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ marginBottom: 50 }}></div>
    </>
  );
};

export default NavBar;
