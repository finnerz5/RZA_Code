import { createSlice } from "@reduxjs/toolkit";

/* This code snippet is creating a Redux slice using the `createSlice` function from the
`@reduxjs/toolkit` library in a TypeScript React application. */
const initialState = {
  formData: [],
};

const calendarSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormDetails(state, action) {
      state.formData.push(action.payload);
    },
  },
});

export const { addFormDetails } = calendarSlice.actions;
export default calendarSlice.reducer;
