import React,{createContext , useReducer} from "react";
import { expensesReducer , initialState } from "./ExpenceReducer";

export const ExpenceContext = createContext();

export const  ExpenceProvider = ({children}) =>{ 
    const [state , dispatch] = useReducer(expensesReducer , initialState); // reducer state

    return (
        <ExpenceContext.Provider value={{state,dispatch}}>
            {children}
        </ExpenceContext.Provider>

    );
}
