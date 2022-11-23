import { api } from "../../api/api";

export const GET_ALL_RESELLER = "GET_ALL_RESELLER";

export const ResellerAction = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_RESELLER,
            payload: {
                loading: true,
                data: false,
                errorMsg: false
            }
        })

        // get API
        api({
            method: 'GET',
            url: '/reseller/list-reseller',
            timeout: 100000
        })
        .then((res) => {
            // success get api
            dispatch({
                type: GET_ALL_RESELLER,
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
                    type: GET_ALL_RESELLER,
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