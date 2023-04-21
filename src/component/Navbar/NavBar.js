import React from "react";
import { GiHamburgerMenu,GiCrossMark } from "react-icons/gi";
import { TbBrandDisney } from "react-icons/tb";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  function tohome() {
    setToggleMenu(false);
    nav("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function toSearch() {
    setToggleMenu(false);
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

      {/* <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
            <GiCrossMark
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li onClick={tohome}>Popular Movie</li>
              <li onClick={toSearch}>Search</li>
            </ul>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
