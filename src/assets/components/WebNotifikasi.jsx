import React, { useEffect, useState } from "react";
import NavbarNotifikasi from "./NavbarNotifikasi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getDatanotifikasi from "../../redux/action/akun/notifikasiAkun";
import NavbarBurger from "./elements/NavbarBurger";

const WebNotifikasi = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [intervalId, setIntervalId] = useState(null);

  const getnotifikasi = () => {
    dispatch(getDatanotifikasi());
  };

  const notifikasi = useSelector((state) => state.Notifikasi.notif);
  console.log(notifikasi);

  useEffect(() => {
    getnotifikasi();

    const id = setInterval(() => {
      getnotifikasi();
    }, 3000);

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const formatTanggal = (tanggal) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(tanggal).toLocaleDateString("id-ID", options);
  };

  return (
    <div>
      <div className="hidden desktop:block">
        <NavbarNotifikasi />
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

      <div className="flex justify-center items-center mt-[-4rem] mb-[3rem] mobile:mt-0 desktop:mt-[-4rem]">
        <div className="w-[75%] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[75%] mobile:h-screen desktop:h-[30rem] pb-4">
          <div className="w-full bg-[#116E63] h-[13%] flex justify-center items-center pl-4">
            <h1 className="text-white font-bold text-2xl py-4 ">Notifikasi</h1>
          </div>
          <div className="px-2 desktop:px-0 scroll-pl-6 snap-y overflow-scroll scrollbar-hide">
            {notifikasi &&
              notifikasi.map((courses) => (
                <div className="flex flex-col gap-10 pt-4 pl-10 mobile:pl-4 desktop:pl-10">
                  <div className="flex gap-2">
                    <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                      <i class="fa-regular fa-bell"></i>
                    </div>
                    <div className="flex justify-between w-full pr-10 mobile:pr-0 desktop:pr-10">
                      <div className="flex space-y-2 flex-col w-full ">
                        <h1 className="text-[#116E63]">{courses.type}</h1>
                        <p>{courses.title} </p>
                        <h1 className="mobile:text-[#8A8A8A] desktop:w-5/6 mobile:w-full">{courses.body}</h1>
                      </div>
                      <div className="mobile:w-[50%] desktop:w-[20%] desktop:justify-end ">
                        <h1>{formatTanggal(courses.createAt)}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="flex flex-col gap-10 pt-4 pl-10 mobile:pl-4 desktop:pl-10">
              <div className="flex gap-2">
                <div className="bg-[#116E63] text-white w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-md ">
                  <i class="fa-regular fa-bell"></i>
                </div>
                <div className="flex justify-between w-full pr-10 mobile:pr-0 desktop:pr-10">
                  <div className="flex space-y-2 flex-col w-full ">
                    <h1 className="text-[#116E63]">Promosi</h1>
                    <p>Aku mencoba </p>
                    <h1 className="mobile:text-[#8A8A8A] desktop:w-5/6 mobile:w-full">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi odio velit minus animi ipsa quae facere praesentium a
                      quam, voluptatibus autem earum atque dolorem laudantium
                      sapiente, possimus harum aspernatur deserunt eos officiis
                      voluptate totam enim nihil! Doloribus, reprehenderit
                      dicta. Libero, dolore iste deleniti nobis vitae
                      consequatur voluptatem eaque in dolorum esse odio
                      blanditiis. Quidem suscipit temporibus aspernatur facilis
                      adipisci corporis laboriosam soluta error consequatur
                      molestias autem rem consequuntur, saepe perferendis et
                      sint? Quidem cupiditate accusantium alias quaerat,
                      assumenda error dolores praesentium quos eum quo voluptas
                      ex maxime quae fugit nobis, perferendis labore doloribus
                      dolorum sunt debitis? Nemo at quas odio.
                    </h1>
                  </div>
                  <div className="mobile:w-[50%] desktop:w-[20%] desktop:justify-end ">
                    <h1>24 des 2023</h1>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebNotifikasi;
