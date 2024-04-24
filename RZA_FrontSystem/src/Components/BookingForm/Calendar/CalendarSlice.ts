import { createSlice } from "@reduxjs/toolkit";

/* This code snippet is defining a Redux slice using the `createSlice` function from the Redux Toolkit
library in TypeScript. Here's a breakdown of what the code is doing: */
const initialState = {
  currentMonth: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  },
  currentSelectedDate: undefined,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCurrentMonth(state, action) {
      state.currentMonth = action.payload;
    },

    addSelectedCurrentDate(state, action) {
      state.currentSelectedDate = action.payload;
    },
    addFormDetails(state, action) {
      state.formData.push(action.payload);
    },
  },
});

export const { setCurrentMonth, addSelectedDate, addSelectedCurrentDate } =
  calendarSlice.actions;
export default calendarSlice.reducer;
