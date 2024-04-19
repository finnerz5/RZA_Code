/* eslint-disable no-unused-vars */

import CalHeader from "./CalHeader";

import CalendarTableContent from "./CalendarTable";

function CalBody() {
  return (
    <div className="flex flex-col gap-4 bg-white p-5 mt-[10rem] sm:mt-0">
      <CalHeader />
      <CalendarTableContent />
    </div>
  );
}

export default CalBody;
