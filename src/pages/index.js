import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Home from "../components/pages/Home";

const HomePage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="MOST Invest" />
      <Home></Home>
    </Layout>
  );
};

export default HomePage;
