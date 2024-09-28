import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React, { useState } from "react";
import logo from "../../img/Logo.png";

import { Link as RouterLink } from "react-router-dom";
import { LogOut } from "../../../redux/action/auth/authLoginUser";
import { useDispatch } from "react-redux";

const NavbarBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch()

  const menuItems = [
    { label: "Kelas Saya", path: "/kelassaya" },
    { label: "Kelas", path: "/berandakelas" },
    { label: "Notifikasi", path: `/WebNotifikasi` },
    { label: "Profile Saya", path: `/WebAkunProfil` },
    { label: "Ubah Password", path: `/WebUbahPassword` },
    { label: "Riwayat Pembayaran", path: "/WebRiwayatPembayaran" },
    { label: "Keluar", onClick: () => dispatch(LogOut()) },
  ];

  // const navbarStyle = {
  //   backgroundColor: "#116E63",
  //   color: '#FFFFFF'
  // };

  return (
    <div>
      {/* <Navbar disableAnimation isBordered style={navbarStyle}> */}
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
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`} className="hover:opacity-70 font-bold">
              {index !== menuItems.length - 1 ? (
                <RouterLink to={item.path} className="w-full">
                  {item.label}
                </RouterLink>
              ) : (
                <a className="w-full" href="/" onClick={item.onClick} color="danger" size="lg">
                  {item.label}
                </a>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};
export default NavbarBurger;
