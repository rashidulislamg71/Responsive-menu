/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { FiList, FiX } from "react-icons/fi";

import { useRef, useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const navRaf = useRef();
  const [showMenu, setMenu] = useState(false);

  const showNavbar = () => {
    navRaf.current.classList.toggle(styles.responsive_nav);
    setMenu(!showMenu);
  };

  return (
    <>
      <header className={styles.navigation}>
        <div className={styles.logo}>
          <span>Logo Hear</span>
        </div>

        <nav ref={navRaf}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/registation">Registation</a>
        </nav>
        {showMenu ? (
          <button
            className={`${styles.nav_btn} ${styles.nav_close_btn}`}
            onClick={showNavbar}
          >
            <FiX />
          </button>
        ) : (
          <button className={styles.nav_btn} onClick={showNavbar}>
            <FiList />
          </button>
        )}
      </header>
    </>
  );
};

export default Navigation;
