import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workflow: ""
}

export const workflow_slice = createSlice({
    name: "workflow_data",
    initialState,
    reducers: {
        setworkflow: (state, action) => {
            state.workflow = action.payload
        }
    }
})


// What is the difference between return / state.push
// We dont mutate, in immer js, they take state.push as copying a old one and adding a it to a new one.
// What is return in reducers? 
// We can change the state directly via state.login = payload.actions 

export const { setworkflow } = workflow_slice.actions;

export default workflow_slice.reducer
