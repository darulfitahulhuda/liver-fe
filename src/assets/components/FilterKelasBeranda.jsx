import React, { useEffect, useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useDispatch, useSelector } from "react-redux";
import getDataAll from "../../redux/action/getAll";

export const FilterKelasBeranda = ({ setFilterData }) => {
  const dispatch = useDispatch();
  const [checkedFilters, setCheckedFilters] = useState({
    filter: [],
    category: [],
    level: [],
  });
  const courses = useSelector((state) => state.courseAll.coursesAll);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    dispatch(getDataAll());
  };

  const sortByCreatedAtNewest = (courses) => courses.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const sortByRatingAscending = (courses) => courses.slice().sort((a, b) => b.rating - a.rating);

  const applyFilters = () => {
    let filteredData = [...courses];

    checkedFilters.filter.forEach((filterType) => {
      if (filterType === "baru") {
        filteredData = sortByCreatedAtNewest(filteredData);
      }

      if (filterType === "populer") {
        filteredData = sortByRatingAscending(filteredData);
      }
    });

    if (checkedFilters.category.length > 0) {
      filteredData = filteredData.filter((data) => checkedFilters.category.includes(data.category.name));
    }

    if (checkedFilters.level.length > 0) {
      filteredData = filteredData.filter((data) => checkedFilters.level.includes(data.level));
    }

    setFilterData(filteredData);
    console.log(filteredData, "filter");
  };

  const handleCheckboxClick = (type, value) => {
    setCheckedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (type === "level" && value === "All") {
        // Handle the "All" checkbox separately
        if (updatedFilters.level.length === 0 || updatedFilters.level.length === 3) {
          // If no levels are selected or all levels are selected, unselect all
          updatedFilters.level = [];
        } else {
          // If some levels are selected, select all
          updatedFilters.level = ["Beginner", "Intermediate", "Advanced"];
        }
      } else {
        // Handle other checkboxes
        const index = updatedFilters[type].indexOf(value);

        if (index !== -1) {
          updatedFilters[type].splice(index, 1);
        } else {
          updatedFilters[type].push(value);
        }
      }

      return updatedFilters;
    });
  };

  useEffect(() => {
    applyFilters();
  }, [checkedFilters]);

  const resetCheckboxChecked = () => {
    setCheckedFilters({ filter: [], category: [], level: [] });
    applyFilters();
  };
  return (
    <div>
      <div className="px-5 space-y-5">
        <div className="rounded-lg bg-white px-0 desktop:p-5 space-y-4">
          {/* Filter Section */}
          <div>
            <span className="text-lg font-bold text-black hidden desktop:block">Filter</span>
            <div className="pl-1 py-2 space-y-2 text-xs">
              <CheckboxGroup>
                <Checkbox value="baru" id="new" checked={checkedFilters.filter.includes("baru")} onClick={() => handleCheckboxClick("filter", "baru")}>
                  <span className="text-sm">Paling Baru</span>
                </Checkbox>
                <Checkbox value="populer" id="popular" checked={checkedFilters.filter.includes("populer")} onClick={() => handleCheckboxClick("filter", "populer")}>
                  <span className="text-sm">Paling Populer</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>

          {/* Category Section */}
          <div>
            <span className="text-lg font-bold text-black">Category</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                {["UI/UX Design", "Python", "Kotlin", "JavaScript", "Java", "PHP", "Flutter", "iOS Development", "HTML & CSS"].map((category) => (
                  <Checkbox key={category} value={category} id={category} checked={checkedFilters.category.includes(category)} onClick={() => handleCheckboxClick("category", category)}>
                    <span className="text-sm">{category}</span>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
          </div>

          {/* Level Section */}
          <div>
            <span className="text-lg font-bold text-black">Level Kesulitan</span>
            <div className="pl-1 py-2 space-y-2">
              <CheckboxGroup>
                {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                  <Checkbox key={level} checked={checkedFilters.level.includes(level)} onClick={() => handleCheckboxClick("level", level)} value={level} id={level}>
                    <span className="text-sm">{level === "All" ? "Semua Level" : `${level} Level`}</span>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetCheckboxChecked}
            className=" items-center h-10 text-white desktop:text-[#DB1B1B] text-md hover:opacity-70 flex justify-center w-full pt-2 desktop:pt-10 desktop:pb-5 bg-[#DB1B1B] desktop:bg-transparent rounded-md"
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};
