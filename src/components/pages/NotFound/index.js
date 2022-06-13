import React from "react";
import Button from "../../common/Button";
import Layout from "../../layout";
import Content from "../../Layout/Content";
import Seo from "../../seo";
import * as styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404: sidan kunde inte hittas" />
      <Content className={styles.content}>
        <h1>Sidan kunde inte hittas </h1>
        <Button link="/">Hem</Button>
      </Content>
    </Layout>
  );
};

export default NotFound;
