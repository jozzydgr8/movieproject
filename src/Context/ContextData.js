import { useContext } from "react";
import { Context } from "./ContextProvider";

export const ContextData = ()=>{
    const context = useContext(Context)
    if(!context){
        throw Error('contextdata requires context provider')
    }
    return context
}