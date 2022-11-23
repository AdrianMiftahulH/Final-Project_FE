import { GET_ALL_TRANSACTION_SUCCESS } from "../actions/Transaction";


const initialState = {
    getAllTransResult : false,
    getAllTransLoading : false,
    getAllTransError : false
}

const TransactionReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_TRANSACTION_SUCCESS:
            return{
                ...state,
                getAllTransResult: action.payload.data,
                getAllTransLoading: action.payload.loading,
                getAllTransError: action.payload.errorMsg
            }
        default: 
            return state;
    }
}

export default TransactionReducer