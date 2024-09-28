import React, { useState } from "react";
import logo from "../../img/Logo.png";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOut } from "../../../redux/action/auth/authLoginUser";

export const NavbarResponsive = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOut());
    navigate("/");
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Kelas Saya", path: "/kelassaya" },
    { label: "Kelas", path: "/berandakelas" },
    { label: "Notifikasi", path: "/WebNotifikasi" },
    { label: "Akun", path: "/WebAkunProfil" },
    { label: "logOut", onClick: handleLogout },
  ];

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
      <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-[#F8F8F8] right-0">
        <NavbarContent className="desktop:hidden pr-3" justify="start">
          <NavbarBrand>
            <img className="w-[10rem] h-[3rem]" src={logo} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="desktop:hidden" justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarMenu>
          {/* search bar */}
          <form className="relative flex w-full py-2" onSubmit={handleSubmit}>
            <input onChange={(e) => setSearch(e.target.value)} placeholder="Cari kursus terbaik . . ." className="border border-black px-3 py-2 rounded-md w-full" type="text"></input>
            <button type="submit" className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-3 cursor-pointer ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </form>

          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`} className="hover:opacity-70 font-bold">
              {index !== menuItems.length - 1 ? (
                <RouterLink to={item.path} className="w-full">
                  {item.label}
                </RouterLink>
              ) : (
                <button className="w-full flex justify-start" onClick={item.onClick} color="danger" size="lg">
                  {item.label}
                </button>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};
