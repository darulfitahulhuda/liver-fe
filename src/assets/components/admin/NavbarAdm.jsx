import React from "react";
import { SearchBar } from "../../components/admin/elements/searchBar";

export const NavbarAdm = () => {
  return (
    
      <div className="w-full h-[5rem] flex justify-around items-center bg-[#E7F0EF] gap-[46rem] ">
      <div className=" ml-[17rem] ">
        <button className="text-center text-[#116E63] font-serif font-semibold text-xl">
          Hi, Admin!
        </button>
      </div>
      <div className="">
        <SearchBar />
      </div>

    </div>
  );
};

export default NavbarAdm;
