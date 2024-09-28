import React, { useState } from "react";
import Filter from "../../../img/Prefix icon.png";
import IcSearch from "../../../img/Vector.png";

export const ButtonFilter = () => {
  // const [filter, setFilter] = useState({
  //   level: '',
  //   type: '',
  // });

  // const filteredCourses = courses.filter(course => {
  //   // Filter based on level and type
  //   const isLevelMatch = filter.level ? course.course.level === filter.level : true;
  //   const isTypeMatch = filter.type ? course.course.type === filter.type : true;

  //   return isLevelMatch && isTypeMatch;
  // });

  // const handleFilterChange = (event) => {
  //   const { name, value } = event.target;
  //   setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  // };
  return (
    <div className="flex flex-row gap-2 items-center">
      <button className="flex flex-row gap-1 py-2 px-4 items-center rounded-[12px] border-1 border-[#116E63] font-bold text-base text-[#116E63]">
        <img src={Filter} alt="" />
        Filter
      </button>
      <button>
        <img src={IcSearch} alt="" />
      </button>
    </div>
  );
};
