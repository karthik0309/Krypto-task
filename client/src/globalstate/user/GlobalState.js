import React, { createContext } from "react";

const initialState = {
  id: 0,
  username: "",
  email:"",
  access:"",
  products:[],
  cart:[],
  total:0
};

const GlobalState = createContext({
  state: initialState,
  dispatch: () => {},
});

export default GlobalState;