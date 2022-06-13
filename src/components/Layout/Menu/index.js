import React, { useState } from "react";
import Button from "../../common/Button";
import * as styles from "./menu.module.css";
import logo from "./logo.svg";
import { Link } from "gatsby";
import { HamburgerMenu } from "./hamburgerMenu";
import Content from "../Content";

const Menu = () => {
  const [open, setOpen] = useState(false);

  let path = "";

  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setOpen(false);
    }
  };

  return (
    <Content>
      <nav className={styles.menu}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="MOST Invest logo" />
        </Link>
        {/* <div className={styles.mobile}>
          <div className={styles.hamburgerMenu}>
            <button onClick={() => setOpen(!open)}>
              <HamburgerMenu></HamburgerMenu>
            </button>
          </div>
        </div> */}
        {/* <ul className={`${open ? styles.open : ""}`}>
          <li onClick={() => handleScroll("about")}>About</li>
          <li onClick={() => handleScroll("contact")}>Contact</li>
        </ul> */}
      </nav>
    </Content>
  );
};
export default Menu;
