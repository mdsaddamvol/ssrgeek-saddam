import { AiOutlineClose } from "react-icons/ai";

import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ setMobileOpen }) => (
  <>
    <div className={styles.mobile}>
      <div className={styles.close}>
        <AiOutlineClose
          className={styles.icon}
          onClick={() => setMobileOpen(false)}
        />
      </div>
    </div>

    <div className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} onClick={() => setMobileOpen(false)}>
            {" "}
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} onClick={() => setMobileOpen(false)}>
            About
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} onClick={() => setMobileOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div className={styles.close} id="mobile-close"></div>
    </div>
  </>
);

export default MobileMenu;
