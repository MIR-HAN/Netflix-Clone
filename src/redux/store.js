import { applyMiddleware, combineReducers, createStore } from "redux";
import { genreReducer } from "./reducers/genreReducer";
import { moviesReducer } from "./reducers/movieReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
   genres: genreReducer,
   movies: moviesReducer,

})


export default createStore(rootReducer,applyMiddleware(thunk))