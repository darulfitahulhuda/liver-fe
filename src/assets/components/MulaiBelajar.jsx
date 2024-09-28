import { Button } from "@nextui-org/button";
import React from "react";
import { useNavigate } from "react-router";
import onBoarding from "../img/onboarding.svg";

export const MulaiBelajar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center desktop:items-center mobile:items-end ">
      <div className="bg-white desktop:w-4/12 mobile:w-full desktop:h-2/3 mobile:h-4/5 desktop:rounded-3xl mobile:rounded-t-3xl flex justify-center items-center  ">
        <div className="flex flex-col justify-center items-center ">
          <button className="place-self-end mr-4 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="20"
              fill="#116E63"
              viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-[#116E63] text-center text-3xl font-bold">
            Onboarding...
          </p>
          <img src={onBoarding} alt="" />
          <p className="text-center font-semibold text-sm">Persiapkan hal berikut untuk belajar yang maksimal:</p>
          <p className="text-center  text-sm px-20">
            Mempunyai akun Figma atau Install Adobe XD Menggunakan internet
            minimal kecepatan 2Mbps Belajar di tempat yang nyaman
          </p>

          <br />
          <Button
            className="bg-[#116E63] w-3/4 h-[2.5rem]  flex justify-center items-center rounded-3xl text-white font-semibold text-sm "
            onClick={() => {
              navigate("/detailKelasPembayaran");
            }}>
            Ikuti Kelas
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
