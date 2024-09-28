import React, { useEffect, useState } from "react";
import { SearchKelasSaya } from "../assets/components/SearchKelasSaya";
import { Button, useDisclosure } from "@nextui-org/react";
import { NavbarResponsive } from "../assets/components/elements/NavbarResponsive";
import { useDispatch, useSelector } from "react-redux";
import Navbarr from "../assets/components/navbar";
import { CourseKelasSaya } from "../assets/components/CourseKelasSaya";
import { ModalFilterKelasSaya } from "../assets/components/ModalFilterKelasSaya";
import { FilterBerandaSaya } from "../assets/components/FilterBerandaSaya";
import getDataCourseMe from "../redux/action/getCourseMe";

export const BerandaKelasSaya = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("outside");
  const [SearchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const dataCoursesMe = useSelector((state) => state.CourseMe.coursesMe.result);
  // console.log(dataCoursesMe, "dataCoursesMe");

  useEffect(() => {
    dispatch(getDataCourseMe());
  }, [dispatch]);

  const [filteredCourses, setFilteredCourses] = useState(dataCoursesMe);
  // console.log(filteredCourses, "FilteredCourses");

  useEffect(() => {
    setFilteredCourses(dataCoursesMe);
  }, [dataCoursesMe]);

  return (
    <div>
      <div className="hidden desktop:block">
        <Navbarr />
      </div>
      <div className="block desktop:hidden">
        <NavbarResponsive />
      </div>
      <div className="bg-[#CFE2E080] h-full w-[100%] flex flex-col desktop:flex-row px-1 desktop:px-[7rem] py-[1rem] desktop:py-[3rem]">
        <div className="flex-col w-[100%] desktop:w-[25%]">
          <div className="w-full flex desktop:flex-col justify-between items-center">
            <span className="flex p-5 text-2xl font-bold text-[#000000]">Topik Kelas</span>
            <Button onPress={onOpen} variant="light" className="desktop:hidden text-[1.2rem] text-[#116E63] font-bold px-2">
              Filter
            </Button>
          </div>
          <div className="hidden desktop:block">
            <FilterBerandaSaya setFilteredCourses={setFilteredCourses} />
          </div>
          <ModalFilterKelasSaya setFilteredCourses={setFilteredCourses} isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} />
        </div>
        <div className="w-[100%] desktop:w-[75%]">
          <SearchKelasSaya setFilteredCourses={setFilteredCourses} dataCoursesMe={dataCoursesMe} SearchInput={SearchInput} setSearchInput={setSearchInput} />
          <div className="space-y-8">
            <CourseKelasSaya filteredCourses={filteredCourses} dataCoursesMe={dataCoursesMe} SearchInput={SearchInput} />
          </div>
        </div>
      </div>
    </div>
  );
};
