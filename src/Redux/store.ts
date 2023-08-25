import {configureStore} from "@reduxjs/toolkit";
import NotesReducer from "./reducer/NotesReducer";


const store =configureStore({
    reducer:{
        Note:NotesReducer
    }
})

export default store;

export type Rootstate = ReturnType<typeof store.getState>;
export type Appdispatc = typeof store.dispatch