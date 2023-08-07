import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    temp_workflow:"",
    temp_createdBy:"",
}

export const dynamicSlice = createSlice({
    name: "dynamo",
    initialState,
    reducers: {
        set_temp_workflow: (state,action) => {
            state.temp_workflow = action.payload;
        },
        set_createdBy: (state,action) => {
            state.temp_createdBy = action.payload;
        }
    }
})

// Reducers are actions for your variable
// Take note that inside reducers : { This is an object }


// In order to use the actions, both of these statements must be written. 
// counterSlice --> is the slice created.
export const { set_temp_workflow, set_createdBy} = dynamicSlice.actions;

// Why export this?
// This is because the store will need it. It is just like that. 
export default dynamicSlice.reducer
