import React, { useContext, useReducer } from 'react';
import { TOGGLE_AMOUNT, TOGGLE_NAV } from '../actions';
import reducer from '../reducer/global_reducer';

const GlobalContext = React.createContext();

const initialState = {
  nav_is_open: false,
  is_sidebar_open: false,
  amount: 0,
  total: {
    cartItems: 0,
    price: 125,
    total_price: 0,
  },
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleNav = () => {
    dispatch({ type: TOGGLE_NAV });
  };
  const toggleAmount = (value) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: value });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        toggleNav,
        toggleAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
