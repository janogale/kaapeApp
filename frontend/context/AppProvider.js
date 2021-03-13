import { createContext, useContext, useEffect, useReducer } from "react";

import Router from "next/router";
import { getFontDefinitionFromNetwork } from "next/dist/next-server/server/font-utils";

const Context = createContext();

const { Provider } = Context;

const saveToLocal = (state) => {
  window.localStorage.setItem("appState", JSON.stringify(state));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "darkmode": {
      const newState = { ...state, darkMode: !state.darkMode };

      // save to local storage
      saveToLocal(newState);
      return newState;
    }
    case "add": {
      // add menu item to cart

      // check if amount is already added to cart.
      let newCart = [...state.cart];

      let currentItem = newCart.find(
        (menu) => menu.name === action.payload.name
      );

      if (!currentItem) {
        newCart.push({ item: state.cart.length, amount: 1, ...action.payload });
      } else {
        let otherMenues = newCart.filter(
          (menu) => menu.name !== action.payload.name
        );
        currentItem.amount += 1;
        newCart = [...otherMenues, currentItem];
      }

      const newState = {
        ...state,
        cart: newCart,
      };

      // save to local storage
      saveToLocal(newState);

      return newState;
    }

    /**
     *  Remote MenuItem from cart
     */
    case "remove": {
      // if cart is empty return state
      if (!state.cart.length) return state;

      // copy cart
      let cartCopy = [...state.cart];

      // decrease amount if > 2 or remove
      let newCart = cartCopy.reduce((acc, menu) => {
        if (menu.name === action.payload.name) {
          // amount is > 1
          if (menu.amount > 1) {
            menu.amount -= 1;
            acc.push(menu);
          }
        } else {
          acc.push(menu);
        }

        return acc;
      }, []);

      // re-add the new cart to state object
      const newState = {
        ...state,
        cart: newCart,
      };

      // save to local storage
      saveToLocal(newState);

      return newState;
    }

    /**
     *  Sign out and clear state
     */
    case "signout": {
      Router.push("/login");

      // save to local storage
      saveToLocal(state);

      return state;
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

export const useAppState = () => useContext(Context);
export default AppProvider;
