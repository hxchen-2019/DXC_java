import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedVendor: "",
  selectedWorkflow: "",
};

export const vendor_slice = createSlice({
  name: "vendor_data",
  initialState,
  reducers: {
    setSelectedVendor: (state, action) => {
      state.selectedVendor = action.payload;
    },
    setSelectedWorkflow: (state, action) => {
      state.selectedWorkflow = action.payload;
    },
  },
});

export const { setSelectedVendor, setSelectedWorkflow } = vendor_slice.actions;

export default vendor_slice.reducer;
