import React, { useEffect, useRef, useState } from "react";

import { CgMenuLeft } from "react-icons/cg";

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
      <nav className={`${styles.nav} ${styles.container__div}`}>
        <a className={styles.navLogo} href="/home">
          SSRGEEK
        </a>

        <div>
          <div className={styles.menu}>
            <ul className={`${styles.menuList} ${styles.list}`}>
              <li className={styles.item}>
                <a href="#home" className={styles.link}>
                  Home
                </a>
              </li>

              <li className={styles.item}>
                <a href="#projects" className={styles.link}>
                  Projects
                </a>
              </li>
              <li className={styles.item}>
                <a href="#services" className={styles.link}>
                  Services
                </a>
              </li>
              <li className={styles.item}>
                <a href="#blog" className={styles.link}>
                  Blog
                </a>
              </li>
              <li className={styles.item}>
                <a href="#career" className={styles.link}>
                  Career
                </a>
              </li>
              <li className={styles.item}>
                <a href="#store" className={styles.link}>
                  Store
                </a>
              </li>
              <li className={styles.item}>
                <div className={styles.link}>
                  <button className={styles.contactUs}>
                    <Link href="#contact">Contact us</Link>
                  </button>
                </div>
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
