import React from "react";
import logo from "../img/HeroImg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="flex flex-col-reverse desktop:flex-row justify-center py-5">
        {/* section kiri */}
        <div className="w-full desktop:w-1/2 flex flex-col px-[2rem] desktop:px-[7rem] my-8 ">
          <h1 className="text-[#116E63] text-[2rem] font-bold font-2xl">Learning</h1>
          <h1 className="text-[#116E63] text-[2rem] font-bold ">Everywhere & Everytime</h1>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-[#F2A227] text-[1.5rem] font-bold">Belajar dari Praktisi Terbaik</h2>
            <div>
              <button
                onClick={() => {
                  navigate("/berandakelas");
                }}
                className="bg-[#116E63] text-white w-full font-semibold desktop:w-[14rem] h-[2.5rem] rounded-xl hover:opacity-70"
              >
                IKUTI KELAS
              </button>
            </div>
          </div>
        </div>

        {/* section kanan */}
        <img src={logo} className="px-[2rem] desktop:px-[4rem]"></img>
      </div>
    </div>
  );
};
export default Hero;
