import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  userType: "",
  workflow: "",
};

export const user_slice = createSlice({
  name: "user_data",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.username = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.email = action.payload;
    },
    setSelectedUserType: (state, action) => {
      state.userType = action.payload;
    },
    setSelectedWorkFlow: (state, action) => {
      state.workflow = action.payload;
    },

  },
});

export const {setSelectedUser, setSelectedEmail, setSelectedUserType, setSelectedWorkFlow} = user_slice.actions;

export default user_slice.reducer;
