import { configureStore } from "@reduxjs/toolkit";

// Step 1: Import all the slices that you need here!
import counterReducer from "../features/exampleSlice";
import loginSlice from "../features/loginSlice";
import vendorSlice from "../features/vendorSlice";
import  dynamicSlice  from "../features/dynamicSlice";
import workflowSlice from "../features/workflowSlice";
import selectedSlice from "../features/userSlice";

export const store = configureStore({
  // This reducer
  reducer: {
    // Step 2: Add the imported files here.
    counter: counterReducer,
    login: loginSlice,
    vendor: vendorSlice,
    dynamo: dynamicSlice,
    workflow: workflowSlice,
    selectedUser: selectedSlice,
  },
});

// This is the single store for your entire application, multiple stores are possible but not recommended.
