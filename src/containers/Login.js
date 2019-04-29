import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { GlobalReducerTypes } from "../reducers/GlobalReducer";
import { AppHistory } from "../History";

const Login = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state.PathHistory)
  return (
    <div>
      login is : {state.IsAuth ? "Yes" : "NO"}
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({ type: GlobalReducerTypes.IS_AUTH });
          AppHistory.push(state.PathHistory);
        }}
      >
        loggin
      </button>
    </div>
  );
};

export default Login;
