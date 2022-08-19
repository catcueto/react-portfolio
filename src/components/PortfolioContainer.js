import React, { useState } from "react";
import NavTabs from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // If User clicks on Home, then render Home page
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    // If user clicks on About, render About page
    if (currentPage === "About") {
      return <About />;
    }
    // If user clicks on Blog, render Blog page
    if (currentPage === "Projects") {
      return <Projects />;
    }
    // Else, render Contact page
    return <Contact />;
  };

  // function for page change
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/*Adding styling to Links for currentPage and adding functionality so it does in fact change page  */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: We are rendering the selected page */}
      {renderPage()}
    </div>
  );
}
