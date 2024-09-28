import React, { useState } from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavbarBurger from "../../assets/components/elements/NavbarBurger";
import { useDispatch, useSelector } from "react-redux";
import getupdate from "../../redux/action/akun/updatePass";
import { LogOut } from "../../redux/action/auth/authLoginUser";
import { toast } from "react-toastify";

export const WebUbahPassword = () => {
  const navigate = useNavigate();
  const [showPasswordlama, setShowPasswordlama] = useState(false);
  const [showPasswordBaru, setShowPasswprdBaru] = useState(false);
  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const dispatch = useDispatch();

  const showpasslama = () => {
    setShowPasswordlama(!showPasswordlama);
  };
  const showpassbaru = () => {
    setShowPasswprdBaru(!showPasswordBaru);
  };

  const updatepaswwordakun = async () => {
    const success = await dispatch(
      getupdate({
        password: password,
        newPassword: newPassword,
      })
    );
    if (success) {
      navigate("/");
      toast.success("secces update paassword");
    } else {
      toast.warning("gagal brow");
    }
  };
  return (
    <div>
      <div className="hidden desktop:block">
        <NavbarAkun />
      </div>
      <div className="block desktop:hidden">
        <NavbarBurger />
      </div>
      <div className="w-full h-[4rem] desktop:h-[10rem] bg-[#E7F0EF] font-bold">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="flex text-[#116E63] gap-3 items-center text-[16px] font-serif pl-[1rem] desktop:pl-[10rem] pt-6"
        >
          <i class="fa-solid fa-arrow-left"> </i>
          <p>Kembali ke Beranda</p>
        </button>
      </div>

      <div className="flex justify-center items-center mt-[-4rem] mobile:mt-0 desktop:mt-[-4rem] ">
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[65%]  mobile:h-screen desktop:h-[33rem]">
          <div className="w-full bg-[#116E63] h-[4rem] flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl mobile:pl-4 desktop:pl-0">Akun</h1>
          </div>

          {/* button */}
          <div className="flex w-full ">
            <div className="w-[50%] flex flex-col items-start gap-10 p-8 mobile:hidden desktop:flex  ">
              <button
                onClick={() => {
                  navigate(`/WebAkunProfil`);
                }}
                className="text-lg w-[80%] flex items-center gap-3 border-b-2 "
              >
                <i class="fa-solid fa-pen text-[#116E63] text-lg   "></i>Profil Saya
              </button>
              <button className="text-[1.3rem] font-semibold text-[#116E63] w-[80%] flex items-center gap-3 border-b-2">
                <i class="fa-solid fa-gear text-[#116E63] text-[1.5rem]"></i>Ubah Password
              </button>
              <button
                onClick={() => {
                  navigate("/WebRiwayatPembayaran");
                }}
                className="text-lg w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-cart-shopping text-[#116E63] text-lg"></i>Riwayat Pembayaran
              </button>
              <button
                onClick={() => {
                  dispatch(LogOut());
                }}
                key="logout"
                color="danger"
                className="text-lg w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-arrow-right-from-bracket text-[#116E63] text-lg "></i>Keluar
              </button>
            </div>

            {/* page  */}
            <div className="w-[50%] mobile:w-full desktop:w-[50%] flex flex-col justify-center items-center ">
              {/* Ubah Password */}
              <div className="   ">
                <h1 className="font-bold text-2xl  flex justify-center pt-4 mb-2">Ubah Password</h1>
                <div className="flex flex-col text-sm justify-center items-center gap-4 pt-4 mobile:pl-4 desktop:pl-0">
                  <div className="relative">
                    <p>Masukkan Password Lama</p>
                    <input onChange={(e) => setpassword(e.target.value)} id="password" type={showPasswordlama ? "text" : "password"} className="border rounded-xl  h-[2.5rem] w-[20rem] px-2"></input>
                    <span className="absolute bottom-2 right-4 cursor-pointer  " onClick={showpasslama}>
                      {showPasswordlama ? <i class="fa-solid fa-eye-slash"></i>: <i class="fa-solid fa-eye"></i> }
                    </span>
                  </div>
                  <div className="relative">
                    <p>Masukkan Password Baru</p>
                    <input onChange={(e) => setnewPassword(e.target.value)} id="newPassword" type={showPasswordBaru ? "text" : "password"} className="border rounded-xl  h-[2.5rem] w-[20rem] px-2"></input>
                    <span className="absolute bottom-2 right-4 cursor-pointer" onClick={showpassbaru}>
                      {showPasswordBaru ?  <i class="fa-solid fa-eye-slash"></i>: <i class="fa-solid fa-eye"></i>}
                    </span>
                  </div>
                  {/* <div>
                    <p>Ulangi Password Baru</p>
                    <input  type={showPasswordulang ? "text" : "password"} className=" border rounded-xl w-[80%] h-[3rem] mobile:w-[95%] desktop:w-[80%]"></input>
                    <span className="absolute right-[7rem] top-[30.5rem] cursor-pointer mobile:right-7 desktop:right-[23.5rem]" onClick={showpassulang}>
                      {showPasswordulang ? "Hide" : "Show"}
                    </span>
                  </div> */}
                  <div className="flex justify-center items-center w-full mt-4">
                    <button
                      className="rounded-lg bg-[#116E63] text-white text-base font-semibold  h-[2.5rem] w-[20rem]"
                      onClick={() => {
                        updatepaswwordakun();
                      }}
                    >
                      Ubah Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
