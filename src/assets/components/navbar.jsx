import React, { useEffect, useState } from "react";
import logo from "../img/Logo.png";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useNavigate } from "react-router";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/action/auth/authLoginUser";
import { GetUserrr } from "../../redux/action/akun/GetUser";

const Navbarr = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = CookieStorage.get(CookieKeys.AuthToken);

  const data = useSelector((state) => state.me.isUser);

  const getdatauser = () => {
    dispatch(GetUserrr());
  };

  useEffect(() => {
    getdatauser();
  }, []);

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
      <div className="bg-[#F8F8F8] flex justify-between p-4">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
        >
          <img className="w-[10rem] h-[3rem]" src={logo} />
        </button>

        {/* search bar */}
        <form className="relative hidden desktop:flex w-1/2" onSubmit={handleSubmit}>
          <input onChange={(e) => setSearch(e.target.value)} placeholder="cari kursus terbaik...." className="border border-black p-3 rounded-md w-full" type="text"></input>
          <button type="submit" className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-3 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </form>
        <div className="me-5">
          {token && token.length ? (
            <div className="flex">
              <Dropdown>
                <DropdownTrigger>
                  <button className="flex items-center justify-center text-white gap-3 bg-[#116E63] px-3 h-[2.5rem] rounded-md">
                    <i class="fa-solid fa-list text-[16px]"></i>
                    <p className="text-lg font-semibold">Kelas</p>
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Example with disabled actions">
                  <DropdownItem
                    onClick={() => {
                      navigate("/");
                    }}
                    key="home"
                  >
                    Home
                  </DropdownItem>
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
                className="w-[5rem] h-[2.5rem]"
              >
                <i class="fa-regular fa-bell text-[#116E63]"></i>
              </button>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar isBordered as="button" className="transition-transform" src={data.foto_profile} />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{data.name}</p>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      navigate(`/WebAkunProfil`);
                    }}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      navigate(`/WebUbahPassword`);
                    }}
                  >
                    Update password
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      navigate("/WebRiwayatPembayaran");
                    }}
                  >
                    Riwayat Pembayaran
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      navigate(`/WebNotifikasi`);
                    }}
                  >
                    Notifikasi
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      dispatch(LogOut());
                    }}
                    key="logout"
                    color="danger"
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <Button
              className="flex items-center justify-center gap-3 bg-[#116E63] text-white w-[6rem] h-[3rem] rounded-md"
              onClick={() => {
                navigate("/login");
              }}
            >
              <i class="fa-solid fa-arrow-right-to-bracket "></i>
              <p className="text-lg font-semibold">Masuk</p>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
