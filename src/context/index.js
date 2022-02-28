import { createContext, useReducer } from "react";
import { reducer } from "../reducers";
export const ProductsContext = createContext();
const UsersProvider = ({ children }) => {
 

  const [ state, dispatch ] = useReducer(reducer, {
     list:[],
     details:{}
  });

  return (
    <ProductsContext.Provider value={{state,dispatch}}>{children}</ProductsContext.Provider>
  );
};
export default UsersProvider;
