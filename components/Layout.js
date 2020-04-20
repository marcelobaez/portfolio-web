import React from "react";
import Header from "./Header";

const Layout = ({ user, loading = false, children }) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Layout;
