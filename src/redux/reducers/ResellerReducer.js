import {
    GET_ALL_RESELLER
} from '../actions/ResellerAction'

const initialState = {
    getAllRessResult : false,
    getAllRessLoading : false,
    getAllRessError : false
}

const ResellerReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_RESELLER:
            return{
                ...state,
                getAllRessResult: action.payload.data,
                getAllRessLoading: action.payload.loading,
                getAllRessError: action.payload.errorMsg
            }
        default: 
            return state;
    }
}

export default ResellerReducer