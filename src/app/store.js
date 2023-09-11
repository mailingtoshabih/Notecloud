import { configureStore } from "@reduxjs/toolkit";
import NewNoteReducer from "./NewNoteSlice";
import SearchReducer from "./SearchSlice";
import SaveReducer from "./SaveSlice";



const store = configureStore({
    reducer : {
        open : NewNoteReducer,
        search : SearchReducer,
        save : SaveReducer,
    }
})

export default store;