import React, { useState } from "react";
import searchIcon from "../../../img/searchIcon.png"

export const SearchBar = ({ handle }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearchField = (e) => {
    e.preventDefault();

    handle(keyword);
  };

  return (
    <form className="flex items-center relative" onSubmit={handleSearchField}>
      <input
        type="text"
        className="w-[250px] ps-3 pe-9 h-[60px] py-1.5 text-sm bg-[#ffff] rounded-[20px] outline-none"
        placeholder="Search .."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button className="absolute right-3 cursor-pointer bg-[#116E63] rounded-[20px] p-2">
        <img src={searchIcon}></img>
      </button>
    </form>
  );
};
