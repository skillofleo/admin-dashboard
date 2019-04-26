import React,{useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext';
// import { GlobalReducerTypes } from '../reducers/GlobalReducer';



const Login = () => {
    const context = useContext(GlobalContext)
    console.info(context)
    return <div>
        login is : 
        {/* <button className="btn btn-success" onClick={()=>dispatch({type:GlobalReducerTypes.IS_AUTH})}>
                loggin
        </button> */}
    </div>
}

export default Login