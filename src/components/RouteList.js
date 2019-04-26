import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";

import { RouteList } from "../Stores/AppStore";
import { GlobalContext } from "../contexts/GlobalContext";

// export  const Routes = RouteList.map(({ component, path, exact }, key) => {
//     return <Route exact={exact} path={path} component={component} key={key} />;
//   });

const Routes = () => {
 
  // const [isAuth, setIsAuth] = useState(false)
  const context = useContext(GlobalContext)
  console.log(context);
  return (
    <>
      {RouteList.map(({ component, path, exact, auth }, key) => {
        
        return auth ? (
          <Route
            exact={exact}
            path={path}
            key={key}
            render={props =>
              false ? (
                <component {...props} />
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
          <Route exact={exact} path={path} component={component} key={key} />
          
        );
      })}
    </>
  );
};

export default Routes;
