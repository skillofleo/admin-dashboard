import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";

import { RouteList } from "../Stores/AppStore";
import { GlobalContext } from "../contexts/GlobalContext";

const Routes = () => {
 
  const {state} = useContext(GlobalContext)
  
  return (
    <>
      {RouteList.map(({ component:Component, path, exact, auth }, key) => {
        
        return auth ? (
          <Route
            exact={exact}
            path={path}
            key={key}
            render={props =>
              state.IsAuth ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )}
          />
        ) : (
          <Route exact={exact} path={path} component={Component} key={key} />
          
        );
      })}
    </>
  );
};

export default Routes;
