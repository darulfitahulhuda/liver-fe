import React, { useEffect, useRef, useState } from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavbarBurger from "../../assets/components/elements/NavbarBurger";
import logo from "../../assets/img/foto.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/action/auth/authLoginUser";
import { useDataProfil } from "../../services/akun/akunprofile";
import { GetUserrr } from "../../redux/action/akun/GetUser";

export const WebAkunProfil = () => {
  const data = useSelector((state) => state.me.isUser);
  const navigate = useNavigate();
  const [image, setimage] = useState("");
  const [name, setname] = useState(data.name);
  const [no_hp, setno_hp] = useState(data.no_hp);
  const [country, setcountry] = useState(data.country);
  const [city, setcity] = useState(data.city);
  const inputRef = useRef(null);
  const { mutate: addprofil } = useDataProfil();
  const dispatch = useDispatch();

  const getdatauser = () => {
    dispatch(GetUserrr());
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getdatauser();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const profilakun = (e) => {
    e && e.preventDefault();
    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("no_hp", no_hp);
    formData.append("country", country);
    formData.append("city", city);

    addprofil(formData);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
  };

  return (
    <>
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
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[65%] mobile:h-screen desktop:h-[33rem] ">
          <div className="w-full bg-[#116E63] h-[4rem] py-4 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl mobile:pl-4 desktop:pl-0">Akun</h1>
          </div>

          {/* button */}
          <div className="flex w-full ">
            <div className="w-[50%] flex flex-col items-start gap-10 p-8 mobile:hidden desktop:flex  ">
              <button className="text-[1.3rem] w-[80%] flex items-center font-semibold text-[#116E63] gap-3 border-b-2 ">
                <i class="fa-solid fa-pen text-[#116E63] text-[1.3rem]  "></i>Profil Saya
              </button>
              <button
                onClick={() => {
                  navigate(`/WebUbahPassword`);
                }}
                className="text-lg w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-gear text-[#116E63] text-lg"></i>Ubah Password
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
                className="text-lg w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-arrow-right-from-bracket text-[#116E63] text-lg "></i>Keluar
              </button>
            </div>

            {/* page  */}
            <div className="w-[50%] desktop:w-[50%] mobile:w-full mobile:px-2 desktop:px-0  ">
              {/* Profil Saya */}

              <div className="flex flex-col justify-center   items-center gap-1 mobile:gap-4 desktop:gap-1 text-sm ">
                <div className="pt-3 flex justify-center items-center cursor-pointer my-3" onClick={handleImageClick}>
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="" className="rounded-full object-cover w-[6rem] h-[6rem]" />
                  ) : (
                    <img src={data.foto_profile || logo} alt="Profile" className="mr-2 rounded-full object-cover w-[6rem] h-[6rem]" />
                  )}
                  <input type="file" id="image" accept="image/*" ref={inputRef} onChange={handleImageChange} className=" hidden" />
                </div>
                <div>
                  <div className="flex gap-2">
                    <p>Nama</p>
                    <span className="text-red-500 text-[0.7rem] flex items-center justify-center">*nama wajib di isi</span>
                  </div>
                  <input value={name} onChange={(e) => setname(e.target.value)} id="name" placeholder="John Doe" className="border rounded-xl h-[2.5rem] w-[20rem] px-2" />
                </div>
                <div>
                  <p>Nomor Telepon</p>
                  <input value={no_hp} onChange={(e) => setno_hp(e.target.value)} id="no_hp" placeholder="+62 812121121121" className="border rounded-xl  h-[2.5rem] w-[20rem] px-2" />
                </div>
                <div>
                  <p>Negara</p>
                  <input value={country} onChange={(e) => setcountry(e.target.value)} id="country" placeholder="John Doe" className="border rounded-xl h-[2.5rem] w-[20rem] px-2" />
                </div>
                <div>
                  <p>Kota</p>
                  <input value={city} onChange={(e) => setcity(e.target.value)} id="city" placeholder="John Doe" className="border rounded-xl h-[2.5rem] w-[20rem] px-2" />
                </div>
                <div>
                  <button
                    onClick={() => {
                      profilakun();
                    }}
                    className="flex justify-center items-center  bg-[#116E63] text-white  rounded-xl h-[2.5rem] text-[1rem] font-bold w-[20rem] mt-5"
                  >
                    Simpan Profil Saya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
