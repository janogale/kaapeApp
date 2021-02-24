import { createContext, useContext, useEffect, useReducer } from "react";

import Router from "next/router";
const Context = createContext();

const { Provider } = Context;

// const saveToLocal = (state) => {
//   localStorage.setItem("settings", JSON.stringify(state));
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "darkmode": {
      const newState = { ...state, darkMode: !state.darkMode };
      saveToLocal(newState);
      return newState;
    }
    case "add": {
      console.log(action.payload);
      let newCart = [...state.cart, { item: state.cart.length }];
      const newState = {
        ...state,
        cart: newCart,
      };

      return newState;
    }
    case "remove": {
      console.log(action.payload);
      // if cart is empty return
      if (!state.cart.length) return state;

      const newState = { ...state };
      newState.cart.pop();
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
    cart: [],
  });

  return <Provider value={[state, dispatch]}>{props.children}</Provider>;
};

export default AppProvider;
export const useAppState = () => useContext(Context);
