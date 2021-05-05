import { createContext, useReducer } from "react";

// initial Context using createContext
export const FavoriteContext = createContext();

// initial state global
const initialstate = {
  favorites: [],
};

// reducer function
function reducerFunc(state, action) {
  const { type, payload } = action;

  //   check type
  switch (type) {
    case "SAVE":
      return { favorites: payload };
    default:
      throw new Error();
  }
}

// create UserProvider for wrapper route
export const FavoriteContextProvider = ({ children }) => {
  //   const dataGlobal = "ini data global";

  //   reducer for change value state
  const [state, dispatch] = useReducer(reducerFunc, initialstate);

  return (
    <FavoriteContext.Provider value={[state, dispatch]}>
      {children}
    </FavoriteContext.Provider>
  );
};
