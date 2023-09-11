import { createSlice } from "@reduxjs/toolkit";


const SaveSlice = createSlice({
    name : "save",
    initialState : {
        heading : "",
        note : ""
    },
    reducers : {
        newheading : (state, action) => {
            state.heading = action.payload
        },
        newnote : (state, action) => {
            state.note = action.payload
        }
    }


})


export const {newnote, newheading} = SaveSlice.actions;
export default SaveSlice.reducer;