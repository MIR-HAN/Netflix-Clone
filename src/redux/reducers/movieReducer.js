import { actionTypes } from "../actionTypes";

const initialState ={
    isLoading: false,
    error: null,
    movies: [],
    
    }
    
    export const moviesReducer = (state=initialState, {type, payload}) => {

        switch (type) {
            case actionTypes.MOVIES_LOADING:
                return {...state, isLoading: true};
    
            case actionTypes.MOVIES_ERROR:
                return {...state, isLoading:false, error:payload};
    
            case actionTypes.MOVIES_SUCCESS:
                return {...state, isLoading:false, error:null, movies:payload.results};
    
                default :
                return state;
        }
    
    };