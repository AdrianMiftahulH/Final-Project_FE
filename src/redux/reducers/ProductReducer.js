import { GET_ALL_PRODUCT } from '../actions/ProductAction';

const initialState = {
    getAllProdResult : false,
    getAllProdLoading : false,
    getAllProdError : false
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCT:
            return{
                ...state,
                getAllProdResult: action.payload.data,
                getAllProdLoading: action.payload.loading,
                getAllProdError: action.payload.errorMsg
            }
        default: 
            return state;
    }
}

export default ProductReducer