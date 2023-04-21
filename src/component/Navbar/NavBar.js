import React from "react";
import { TbBrandDisney } from "react-icons/tb";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  function tohome() {
    nav("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function toSearch() {
  
    nav("/search");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <span className="p__opensans" onClick={tohome}>
          <TbBrandDisney />
        </span>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans" onClick={tohome}>
          Popular Movie
        </li>
        <li className="p__opensans" onClick={toSearch}>
          Search
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
