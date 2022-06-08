import React from "react";

import Navbar from "./home/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Layout;
