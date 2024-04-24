/* eslint-disable no-unused-vars */

import CalHeader from "./CalHeader";

import CalendarTableContent from "./CalendarTable";

/* The `function CalBody() {` is defining a functional component in TypeScript React. This component is
rendering a `div` element with the class name "flex flex-col gap-4 bg-white p-5 mt-[10rem] sm:mt-0",
and it includes the `CalHeader` component and `CalendarTableContent` component as its children. This
component represents the body section of a calendar interface. */
function CalBody() {
  return (
    <div className="flex flex-col gap-4 bg-white p-5 mt-[10rem] sm:mt-0">
      <CalHeader />
      <CalendarTableContent />
    </div>
  );
}

export default CalBody;
