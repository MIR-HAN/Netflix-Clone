// get categorys

import { actionTypes } from "../actionTypes";
import api from "../../utils/api"

export const getGenres =()=> (dispatch)=>{

    dispatch({
        type:actionTypes.GENRES_LOADING
    })

    api.get("/genre/movie/list")
    .then((res)=> dispatch({
        type:actionTypes.GENRES_SUCCESS,
        payload:res.data.genres
    }))
    .catch((err)=> dispatch({
        type:actionTypes.GENRES_ERROR,
        payload:err.message
    }))
};
