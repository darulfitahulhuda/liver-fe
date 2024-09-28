import React, { useState } from "react";
import logo from "../../img/Logo.png";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export const NavbarAkun = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate(`/pagesearch/${search}`);
    } else {
      navigate("/");
    }
  }

  return (
    <div>
      <div className="bg-[#F8F8F8] flex justify-between p-4" onSubmit={handleSubmit}>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
        >
          <img className="w-[10rem] h-[3rem]" src={logo} />
        </button>
        <form className="relative flex w-1/2 ">
          <input onChange={(e) => setSearch(e.target.value)} placeholder="cari kursus terbaik...." className="  border border-black px-3 rounded-md w-full" type="text"></input>
          <button type="submit" className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-3 cursor-pointer ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </form>
        <div className="flex gap-6">
          <Dropdown>
            <DropdownTrigger>
              <button>
                <i class="fa-solid fa-list text-[#116E63]"></i>
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
              <DropdownItem
                onClick={() => {
                  navigate("/kelassaya");
                }}
                key="kelassaya"
              >
                Kelas Saya
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  navigate("/berandakelas");
                }}
                key="kelas"
              >
                Kelas
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <button
            onClick={() => {
              navigate(`/WebNotifikasi`);
            }}
          >
            <i class="fa-regular fa-bell text-[#116E63]"></i>
          </button>
          <button className="flex items-center justify-center text-white gap-3 bg-[#116E63] px-3 h-[2.5rem] rounded-md">
            <i class="fa-regular fa-user"></i>
            <p className="text-lg font-semibold">Akun</p>
          </button>
        </div>
      </div>
    </div>
  );
};
