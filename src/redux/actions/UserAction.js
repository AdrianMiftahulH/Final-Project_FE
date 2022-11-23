import { api } from "../../api/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GET_LIST_USER = "GET_LIST_USER";
export const GET_BY_ID_USER = "GET_BY_ID_USER";
export const ADD_USER = "ADD_USER";
export const RESET_ADD_USER = "RESET_ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const GetAllUser = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_LIST_USER,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: '/user/list-user',
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_LIST_USER,
                payload: {
                    loading: false,
                    data: res.data.data,
                    errorMsg: false
                }
            })
        }).catch((err) => {
            if (err.response) {
                // error get api
                dispatch({
                    type: GET_LIST_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: err.response.data.msgErr
                    }
                })
            }
        })
    }
}

// detail by id
export const GetByIdUser = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_BY_ID_USER,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: `user/detail/${id}`,
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_BY_ID_USER,
                payload: {
                    loading: false,
                    data: res.data.data,
                    errorMsg: false
                }
            })
        }).catch((err) => {
            if (err.response) {
                // error get api
                dispatch({
                    type: GET_BY_ID_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: err.response.data.msgErr
                    }
                })
            }
        })
    }
}

// add user
export const addUser = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_USER,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // post API
        api({
            method: 'POST',
            url: '/user/create',
            data: data,
            timeout: 100000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((response) => {
            // success get api
            dispatch({
                type: ADD_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMsg: false
                }
            })
        }).catch((err) => {
            if (err.response) {
                // error get api
                dispatch({
                    type: ADD_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: err.response.data.msgErr
                    }
                })
                toast.error(err.response.data.msgErr, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
    }
}

// update user
export const updateUser = (data, id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_USER,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // post API
        api({
            method: 'PATCH',
            url: `/user/update/${id}`,
            data: data,
            timeout: 100000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((response) => {
            // success get api
            dispatch({
                type: UPDATE_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMsg: false
                }
            })
        }).catch((err) => {
            if (err.response) {
                // error get api
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: err.response.data.msgErr
                    }
                })
                toast.error(err.response.data.msgErr, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
    }
}

// delete user
export const deleteUser = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_USER,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // post API
        api({
            method: 'DELETE',
            url: `/user/delete/${id}`,
            timeout: 100000,
        })
        .then((response) => {
            // success get api
            dispatch({
                type: DELETE_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMsg: false
                }
            })
        }).catch((err) => {
            if (err.response) {
                // error get api
                dispatch({
                    type: DELETE_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: err.response.data.msgErr
                    }
                })
                toast.error(err.response.data.msgErr, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
    }
}