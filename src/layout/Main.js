import React, { useState } from "react";
import NavList from "../components/NavList";

const Main = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-green-light">
       <div className="container">
       <span className="navbar-brand">Navbar</span>
        <button
          className={`navbar-toggler  ${toggle ? "" : "collapsed"} `}
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggle(!toggle)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div
          className={`collapse navbar-collapse ${toggle ? " show" : ""}`}
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <NavList />
          </ul>
        </div>
       </div>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default Main;
