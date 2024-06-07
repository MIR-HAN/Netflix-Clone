import { actionTypes } from "../actionTypes"
import api from "../../utils/api";

// get pupulars from api

export const getPopular = () => (dispatch) => {

    dispatch({
        type: actionTypes.MOVIES_LOADING,
    });

    const params = {
        region: "NLD",
    }

    api.get(`/movie/popular`, { params })
        .then((res) => dispatch({
            type: actionTypes.MOVIES_SUCCESS,
            payload: res.data,
        }))
        .catch((err) => dispatch({
            type: actionTypes.MOVIES_ERROR,
            payload: err.message,
        }))
}