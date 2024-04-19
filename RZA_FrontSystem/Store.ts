import { configureStore } from "@reduxjs/toolkit";

import calendarReducer from "../RZA_FrontSystem/src/Components/BookingForm/Calendar/CalendarSlice";
import formReducer from "../RZA_FrontSystem/src/Components/BookingForm/Form/FormSlice";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    form: formReducer,
  },
});
export default store;
