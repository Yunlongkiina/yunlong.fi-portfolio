import CreateDataContext from "./CreateDataContext";
import goldencropapi from "../api/goldencropapi";

const deliveryOrderReducer=(state, action)=>{
    switch(action.type){
        case 'get_delivery_orders':
            return action.playload;    
        case 'post_delivery_orders_done':
            return false;
        default:
            return state;
    }
}



const getDeliveryOrder =(dispatch)=> async (content)=>{
        try{
            // Production: const getDeliveryOrderApi = `/api/v15/deliveryorders/NSO231${content}`
            // Test:        const getDeliveryOrderApi = `/api/v15/deliveryorders/NSO23${content}`
            const getDeliveryOrderApi = `/api/v15/deliveryorders/NSO231${content}`
            let response = await goldencropapi.get(getDeliveryOrderApi);
            let validResponse = false;
            if(response){
                response = response.data
                if('error' in response){
                    validResponse = false
                }else{
                    validResponse = response
                }
            }
            dispatch({type: 'get_delivery_orders', playload:validResponse})
        }catch(err){
            console.log(err);
            // dispatch({type: 'add_error', playload:'Something went wrong!'})
        }
    };

const onSubmitDeliveryOrder =(dispatch)=> async (content, callback)=>{
        try{
            const response = await goldencropapi.post('/api/v15/deliveryordersspa',{params:{content:content}})

            if(response && response.data){
                if (response.data.result){
                    if(response.data.result.Error){
                        // action to process error
                        console.log('Somethng went wrong');
                    }else{
                        dispatch({type: 'post_delivery_orders_done'})
                        callback();
                    }
                }
            }
        }catch(err){
            console.log(err);
            // dispatch({type: 'add_error', playload:'Something went wrong!'})
        }
    };

export const {Context, Provider} = CreateDataContext(
    deliveryOrderReducer,
    {getDeliveryOrder,onSubmitDeliveryOrder},
    false,
)