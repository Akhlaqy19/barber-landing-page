import React from "react";

const WorkingHours = () => {
  return (
    <>
      <div className="max-w-max text-xl text-justify uppercase">
        <div className="flex flex-row gap-x-16">
          <span className="font-bold">MON-THU</span>
          <span>09:00 - 19:00</span>
        </div>
        <div className="flex flex-row gap-x-16">
          <span className="font-bold">SAT-SUN</span>
          <span>09:00 - 18:00</span>
        </div>
      </div>
    </>
  );
};

export default WorkingHours;
