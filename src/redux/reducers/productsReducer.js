export const productsReducer=(state=[],action)=>{
    switch(action.type){
        case "GET_PRODUCT":{
            return action.payload;
        }
        default:{
            return state;
        }
    }
}