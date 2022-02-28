import React from "react";
import About from "./pages/About"
import Header from "./Header"
import Footer from "./Footer"

function Main() {

  return (
    <div className="page-container">
      <Header />
      <About></About>
      <Footer />
    </div>
  );
};

export default Main;