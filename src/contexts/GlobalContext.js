import React,{useReducer} from 'react'
import { InitGlobalState } from '../Stores/InitGlobalState';
import { GlobalReducer } from '../reducers/GlobalReducer';


export const GlobalContext = React.createContext(InitGlobalState)

const GlobalContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(GlobalReducer, InitGlobalState);

    return (
    <GlobalContext.Provider value={{state,dispatch}}>
        {children}
    </GlobalContext.Provider>
    )

   
}

export default GlobalContextProvider