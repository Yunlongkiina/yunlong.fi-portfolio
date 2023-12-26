import CreateDataContext from "./CreateDataContext";
import goldencropapi from  "../api/goldencropapi";

const authReducer=(state, action)=>{
    switch(action.type){
        case 'signin_success':
            return action.playload;
        case 'add_error':
            return {...state, errorMessage: action.playload};
        default:
            return state;
    }
}

const signin =(dispatch)=>{
    return async (username, callback)=>{
        
        try{
            const response = await goldencropapi.post('/api/v15/gcappsignin',{params:{username:username}})
            if(response.data && response.data.result.valid_result){
                if(response.data.result.valid_result.allisGood){
                    const validResponse = {...response.data.result.valid_result,userId:username}
                    dispatch({type: 'signin_success', playload: validResponse})
                    callback(response.data.result.valid_result.role.depatmentId);
                }else{
                    dispatch({type: 'add_error', playload: response.data.result.valid_result.error})
                }
            }
        }catch(err){
            dispatch({type: 'add_error', playload:'Something went wrong!'})
        }
    };
}

const signout =(dispatch)=>{
    return ({email, password})=>{
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

export const {Context, Provider} = CreateDataContext(
    authReducer,
    {signin,signout},
    {   
        allisGood: false,
        employeeName:false,
        role:false,
        userId:false,
        errorMessage:false
    },
)

