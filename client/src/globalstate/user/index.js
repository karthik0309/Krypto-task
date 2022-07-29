import React, { useContext, useReducer } from "react";
import GlobalState from "./GlobalState";
import Reducer from "./Reducer";

export const initialState = {
    id: 0,
    username: "",
    email:"",
    access:"",
    products:[],
    cart:[],
    total:0
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalState);
export default StateProvider;