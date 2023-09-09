import { configureStore } from "@reduxjs/toolkit";
import NewNoteReducer from "./NewNoteSlice";




const store = configureStore({
    reducer : {
        open : NewNoteReducer
    }
})

export default store;