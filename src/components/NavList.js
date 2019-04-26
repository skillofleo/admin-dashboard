import React from "react";
import { RouteList, TypeRuote } from "../Stores/AppStore";
import { AppHistory } from "../History";

const NavList = () => {
  const navigate = (event, path) => {
    event.preventDefault();
    AppHistory.push(path);
  };
  return (
    <>
      {RouteList.map(({ name, path, type }, index) => {
        return type === TypeRuote.NAVBAR ? (
          <li className="nav-item active" key={index}>
            <a
              className="nav-link"
              href={path.toString()}
              onClick={e => navigate(e, path)}
            >
              {name}
            </a>
          </li>
        ) : null;
      })}
    </>
  );
};

export default NavList;
