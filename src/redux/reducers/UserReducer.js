import {
    GET_LIST_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_BY_ID_USER,
    RESET_ADD_USER
} from '../actions/UserAction'

const initialState = {
    getAllUserResult : false,
    getAllUserLoading : false,
    getAllUserError : false,

    getByIdUserResult : false,
    getByIdUserLoading : false,
    getByIdUserError : false,

    addUserResult : false,
    addUserLoading : false,
    addUserError : false,

    updateUserResult : false,
    updateUserLoading : false,
    updateUserError : false,

    deleteUserResult : false,
    deleteUserLoading : false,
    deleteUserError : false
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST_USER:
            return{
                ...state,
                getAllUserResult: action.payload.data,
                getAllUserLoading: action.payload.loading,
                getAllUserError: action.payload.errorMsg
            };
        case GET_BY_ID_USER:
            return{
                ...state,
                getByIdUserResult: action.payload.data,
                getByIdUserLoading: action.payload.loading,
                getByIdUserError: action.payload.errorMsg
            };
        case ADD_USER:
            return{
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errorMsg
            };
        case RESET_ADD_USER:
            return{
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errorMsg
            };
        case UPDATE_USER:
            return{
                ...state,
                updateUserResult: action.payload.data,
                updateUserLoading: action.payload.loading,
                updateUserError: action.payload.errorMsg
            };
        case DELETE_USER:
                return{
                    ...state,
                    deleteUserResult: action.payload.data,
                    deleteUserLoading: action.payload.loading,
                    deleteUserError: action.payload.errorMsg
                };
        default: 
            return state;
    }
}

export default UserReducer