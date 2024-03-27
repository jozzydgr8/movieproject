import { createContext, useReducer } from "react";

export const Context = createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'getData':
            return{
                ...state, data:action.payload
            }
        case 'queryData':
            return{
                ...state, queryData:action.payload
            }
    }
}
export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, {data:null, queryData:null});
    console.log(state)
    return(
        <Context.Provider value={{...state, dispatch}}>
            {children}
        </Context.Provider>
    )
}