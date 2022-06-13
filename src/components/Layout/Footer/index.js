import { Link } from "gatsby";
import React from "react";
import Panel from "../../common/Panel";
import Content from "../Content";
import * as styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <Content>
      <div className={styles.legal}>Copyright &copy; MOST Invest 2022</div>
    </Content>
  </div>
);

export default Footer;
