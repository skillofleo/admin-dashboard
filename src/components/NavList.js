import React, { useContext } from "react";
import { RouteList, TypeRuote } from "../Stores/AppStore";
import { AppHistory } from "../History";
import { GlobalContext } from "../contexts/GlobalContext";
import { GlobalReducerTypes } from "../reducers/GlobalReducer";

const NavList = () => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = (event, path) => {
    event.preventDefault();

    dispatch({ type: GlobalReducerTypes.PATH_HISTORY, PathHistory: path });
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
