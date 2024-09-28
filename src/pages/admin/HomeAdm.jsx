import React from "react";
import NavbarAdm from "../../assets/components/admin/NavbarAdm";
import CardAdm from "../../assets/components/admin/CardAdm";
import SideBar from "../../assets/components/admin/SideBar";

export const HomeAdm = () => {
  return (
    <div className=" bg-[#F8F8F8]">
      <NavbarAdm />
      <CardAdm />
      <SideBar />
    </div>
  );
};
