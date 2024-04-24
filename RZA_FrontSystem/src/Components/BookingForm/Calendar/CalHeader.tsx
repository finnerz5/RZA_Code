import { useDispatch, useSelector } from "react-redux";
import { setCurrentMonth } from "./CalendarSlice";

/* The `CalHeader` function is a React functional component that represents the header section of a
calendar. It includes navigation buttons to move between months. The component uses Redux hooks
`useSelector` and `useDispatch` to access the current month state from the Redux store and dispatch
actions to update the current month. */
  function CalHeader() {
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { currentMonth } = useSelector((state) => state.calendar);
  const { year, month } = currentMonth;
  const dispatch = useDispatch();

  return (
    <div className="flex gap-10 items-center justify-center">
      <button
        onClick={() =>
          dispatch(
            setCurrentMonth({
              year: month - 1 < 0 ? year - 1 : year,
              month: month - 1 < 0 ? 11 : month - 1,
            })
          )
        }
        className="curson-pointer inline-block text-[1.2rem] font-bold"
      >
        &#60;
      </button>
      <span>
        {monthOptions[month]} {year}
      </span>
      <button
        onClick={() =>
          dispatch(
            setCurrentMonth({
              year: month + 1 > 11 ? year + 1 : year,
              month: (month + 1) % 12,
            })
          )
        }
        className="curson-pointer inline-block text-[1.2rem] font-bold"
      >
        &#62;
      </button>
    </div>
  );
}

export default CalHeader;
