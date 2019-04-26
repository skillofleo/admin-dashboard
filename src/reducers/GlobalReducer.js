

export const GlobalReducer = (state,action)=>{
    
    switch(action.type){
        case GlobalReducerTypes.IS_AUTH:{
            return{...state,IsAuth:!state.IsAuth}
        }
        default:
            return{...state}
    }
}

export const GlobalReducerTypes = {
    IS_AUTH:"IS_AUTH"
}
