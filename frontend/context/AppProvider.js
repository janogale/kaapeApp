import { createContext, useContext, useEffect, useReducer } from "react";

import Router from "next/router";
const Context = createContext();

const { Provider } = Context;

// const saveToLocal = (state) => {
//   localStorage.setItem("settings", JSON.stringify(state));
// };

const v = (state, action) => {
  switch (action.type) {
    case "darkmode": {
      const newState = { ...state, darkMode: !state.darkMode };
      saveToLocal(newState);
      return newState;
    }

    case "signout": {
      Router.push("/login");
      return { ...state };
    }
    default:
      return state;
  }
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Kaape Menu",
    mobile: false,
    boxed: false,
    darkMode: false,
    cart: null,
  });

  return <Provider value={[state, dispatch]}>{props.children}</Provider>;
};

export default AppProvider;
export const useAppState = () => useContext(Context);
