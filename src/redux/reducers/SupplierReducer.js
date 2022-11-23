import {
    GET_ALL_SUPP,
    ADD_SUPP,
    UPDATE_SUPP,
    DELETE_SUPP,
    GET_BY_ID_SUPP
} from '../actions/SupplierAction'

const initialState = {
    getAllSuppResult : false,
    getAllSuppLoading : false,
    getAllSuppError : false,

    getByIdSuppResult : false,
    getByIdSuppLoading : false,
    getByIdSuppError : false,

    addSuppResult : false,
    addSuppLoading : false,
    addSuppError : false,

    updateSuppResult : false,
    updateSuppLoading : false,
    updateSuppError : false,

    deleteSuppResult : false,
    deleteSuppLoading : false,
    deleteSuppError : false
}

const SupplierReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_SUPP:
            return{
                ...state,
                getAllSuppResult: action.payload.data,
                getAllSuppLoading: action.payload.loading,
                getAllSuppError: action.payload.errorMsg
            }
        case GET_BY_ID_SUPP:
            return{
                ...state,
                getByIdSuppResult: action.payload.data,
                getByIdSuppLoading: action.payload.loading,
                getByIdSuppError: action.payload.errorMsg
            };
        case ADD_SUPP:
            return{
                ...state,
                addSuppResult: action.payload.data,
                addSuppLoading: action.payload.loading,
                addSuppError: action.payload.errorMsg
            };
        case UPDATE_SUPP:
            return{
                ...state,
                updateSuppResult: action.payload.data,
                updateSuppLoading: action.payload.loading,
                updateSuppError: action.payload.errorMsg
            };
        case DELETE_SUPP:
                return{
                    ...state,
                    deleteSuppResult: action.payload.data,
                    deleteSuppLoading: action.payload.loading,
                    deleteSuppError: action.payload.errorMsg
                };
        default: 
            return state;
    }
}

export default SupplierReducer