export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GlobalReducerTypes.IS_AUTH: {
      return { ...state, IsAuth: !state.IsAuth };
    }
    case GlobalReducerTypes.PATH_HISTORY: {
      return { ...state, PathHistory: action.PathHistory };
    }
    default:
      return { ...state };
  }
};

export const GlobalReducerTypes = {
  IS_AUTH: "IS_AUTH",
  PATH_HISTORY: "PATH_HISTORY"
};
