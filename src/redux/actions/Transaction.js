import { api } from "../../api/api";

export const GET_ALL_TRANSACTION_SUCCESS = "GET_ALL_TRANSACTION_SUCCESS";

export const TransAction = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_TRANSACTION_SUCCESS,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: '/transaction/list-transaction',
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_ALL_TRANSACTION_SUCCESS,
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
                    type: GET_ALL_TRANSACTION_SUCCESS,
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