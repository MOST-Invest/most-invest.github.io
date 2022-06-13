import React from "react";
import Menu from "./Layout/Menu";
import Footer from "./Layout/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3d67ff" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Menu></Menu>
      <main style={{ paddingTop: 200 }}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
