import { api } from "../../api/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GET_ALL_SUPP = "GET_ALL_SUPP";
export const GET_BY_ID_SUPP = "GET_BY_ID_SUPP";
export const ADD_SUPP = "ADD_SUPP";
export const UPDATE_SUPP = "UPDATE_SUPP";
export const DELETE_SUPP = "DELETE_SUPP";

export const getAllSupp = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_SUPP,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: '/supplier/list-supp',
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_ALL_SUPP,
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
                    type: GET_ALL_SUPP,
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
export const GetByIdSupp = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_BY_ID_SUPP,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: `/supplier/detail/${id}`,
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_BY_ID_SUPP,
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
                    type: GET_BY_ID_SUPP,
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
export const addSupp = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_SUPP,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // post API
        api({
            method: 'POST',
            url: '/supplier/add-supp',
            data: data,
            timeout: 100000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((response) => {
            // success get api
            dispatch({
                type: ADD_SUPP,
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
                    type: ADD_SUPP,
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
export const updateSupp = (data, id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_SUPP,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // post API
        api({
            method: 'PATCH',
            url: `/supplier/update/${id}`,
            data: data,
            timeout: 100000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((response) => {
            // success get api
            dispatch({
                type: UPDATE_SUPP,
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
                    type: UPDATE_SUPP,
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
export const deleteSupplier = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_SUPP,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // post API
        api({
            method: 'DELETE',
            url: `/supplier/delete/${id}`,
            timeout: 100000,
        })
        .then((response) => {
            // success get api
            dispatch({
                type: DELETE_SUPP,
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
                    type: DELETE_SUPP,
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