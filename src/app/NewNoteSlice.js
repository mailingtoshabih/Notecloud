import {createSlice} from "@reduxjs/toolkit"



const NewNoteSlice = createSlice({

    name : "newnote",
    initialState : {
        value : false,
    },
    reducers : {
        open : (state) => {
            state.value = !state.value;
        }
    }

});


export const {open} = NewNoteSlice.actions;
export default NewNoteSlice.reducer;