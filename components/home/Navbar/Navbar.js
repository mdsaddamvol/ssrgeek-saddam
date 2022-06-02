import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";

import { BsHandbag } from "react-icons/bs";

import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const headerRef = useRef(null);

  const [isMobileOpen, setMobileOpen] = useState(false);
  console.log(isMobileOpen);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const toogleMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <nav className={`${styles.nav} ${styles.containerDiv}`}>
        <a className={styles.navLogo} href="/home">
          SSR
        </a>

        <div className={styles.menu}>
          <ul className={`${styles.menuList} ${styles.list}`}>
            <li className={styles.item}>
              <a className={styles.link}> Home</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}> About</a>
            </li>

            <li className={styles.item}>
              <a className={styles.link}>Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.icons}>
          <ul className={styles.list}>
            <div className={styles.btns}>
              <div
                aria-expanded={isMobileOpen ? "true" : "false"}
                onClick={() => {
                  setMobileOpen((prev) => !prev);
                }}
                className={styles.toggle}
              >
                <CgMenuLeft />
              </div>
            </div>
          </ul>
        </div>
      </nav>

      {/* hidden mobile menu drawer */}
      <div className={isMobileOpen ? styles.mobileMenuOpen : ""}>
        <div className={styles.mobileMenu}>
          <MobileMenu
            setMobileOpen={setMobileOpen}
            isMobileOpen={isMobileOpen}
          />
        </div>
        <div
          className={isMobileOpen ? styles.darkoverflow : ""}
          onClick={toogleMobileMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
