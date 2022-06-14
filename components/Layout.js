import React from "react";
import Footer from "./Footer/Footer";

import Navbar from "./home/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
