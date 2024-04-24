/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { addSelectedCurrentDate } from "./CalendarSlice";

/* The `CalendarTableContent` function is a React component that generates a calendar table based on
the current month and year. It uses Redux hooks `useDispatch` and `useSelector` to interact with the
Redux store. The function `generateCalendar` calculates the days in the month and the starting day
of the month. It then generates a 6x7 matrix representing the calendar. */
function CalendarTableContent() {
  const dispatch = useDispatch();
  const { currentMonth } = useSelector((state) => state.calendar);
  const { formData } = useSelector((state) => state.form);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const generateCalendar = () => {
    const { year, month } = currentMonth;

    const daysCount = daysInMonth(year, month);
    const startingDay = firstDayOfMonth(year, month);

    const calendar = [];

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startingDay) || dayCounter > daysCount) {
          week.push(null);
        } else {
          const date = new Date(year, month, dayCounter);
          week.push(date);
          dayCounter++;
        }
      }
      calendar.push(week);
    }

    return calendar;
  };
  const calendar = generateCalendar();

  const handleDateClick = (year: number, month: number, date: number, day: number) => {
    dispatch(addSelectedCurrentDate({ year, month, date, day }));
  };
  const headerStyle = "w-[3.2rem]";

  return (
    <div>
      <table className=" min-w-[300px] sm:min-w-[350px]">
        <thead>
          <tr>
            <th className={headerStyle}>Sun</th>
            <th className={headerStyle}>Mon</th>
            <th className={headerStyle}>Tue</th>
            <th className={headerStyle}>Wed</th>
            <th className={headerStyle}>Thu</th>
            <th className={headerStyle}>Fri</th>
            <th className={headerStyle}>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, rowIndex) => (
            <tr key={rowIndex}>
              {week.map((date, columnIndex) => {
                const matchingEntries = formData.filter(
                  (entry: { currentSelectedDate: { year: number | undefined; month: number | undefined; date: number | undefined; }; }) =>
                    entry.currentSelectedDate &&
                    entry.currentSelectedDate.year === date?.getFullYear() &&
                    entry.currentSelectedDate.month === date?.getMonth() &&
                    entry.currentSelectedDate.date === date?.getDate()
                );
                const bothSlotsBooked =
                  date &&
                  matchingEntries.some(
                    (entry: { morningSlot: any; eveningSlot: any; }) => entry.morningSlot && entry.eveningSlot
                  );

                const oneSlotBooked =
                  date &&
                  formData.find(
                    (entry: { currentSelectedDate: { year: number; month: number; date: number; }; morningSlot: boolean; eveningSlot: boolean; }) =>
                      entry.currentSelectedDate &&
                      entry.currentSelectedDate.year === date.getFullYear() &&
                      entry.currentSelectedDate.month === date.getMonth() &&
                      entry.currentSelectedDate.date === date.getDate() &&
                      (entry.morningSlot === true || entry.eveningSlot === true)
                  );

                return matchingEntries.length > 1 || bothSlotsBooked ? (
                  <td
                    key={columnIndex}
                    className="relative text-center py-3 cursor-not-allowed cur"
                  >
                    {date ? date.getDate() : ""}
                    <span className="absolute left-[50%] translate-x-[-50%] bottom-0 bg-red-700 h-2 w-2 rounded-full"></span>
                  </td>
                ) : (
                  <td
                    key={columnIndex}
                    className="relative text-center py-3 cursor-pointer "
                    onClick={() =>
                      date &&
                      handleDateClick(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate(),
                        date.getDay()
                      )
                    }
                  >
                    {date ? date.getDate() : ""}
                    {date && oneSlotBooked && (
                      <span className="absolute left-[50%] translate-x-[-50%] bottom-0  bg-yellow-500 h-2 w-2 rounded-full"></span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarTableContent;
