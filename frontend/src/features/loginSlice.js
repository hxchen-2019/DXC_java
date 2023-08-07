import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    email: "",
    userType: "",
    companyName: ""
}

export const login_detail_slice = createSlice({
    name: "login_data",
    initialState,
    reducers: {
        setglobalusername: (state, action) => {
            state.username = action.payload
        },
        setglobalpassword: (state, action) => {
            state.password = action.payload
        },
        setname: (state, action) => {
            state.name = action.payload
        },
        setuserType: (state, action) => {
            state.userType = action.payload
        },
    }
})


// What is the difference between return / state.push
// We dont mutate, in immer js, they take state.push as copying a old one and adding a it to a new one.
// What is return in reducers? 
// We can change the state directly via state.login = payload.actions 

export const { setglobalusername, setglobalpassword, setname, setuserType} = login_detail_slice.actions;

export default login_detail_slice.reducer