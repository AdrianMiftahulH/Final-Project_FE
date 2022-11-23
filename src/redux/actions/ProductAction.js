import { api } from "../../api/api";

export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";

export const ProductAction = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: '/product/list-product',
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_ALL_PRODUCT,
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
                    type: GET_ALL_PRODUCT,
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