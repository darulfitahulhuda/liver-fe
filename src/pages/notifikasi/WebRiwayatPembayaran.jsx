import React, { useEffect } from "react";
import { NavbarAkun } from "../../assets/components/elements/NavbarAkun";
import { Navigate, useNavigate } from "react-router-dom";
import NavbarBurger from "../../assets/components/elements/NavbarBurger";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../redux/action/auth/authLoginUser";
import getDataPaymentHistory from "../../redux/action/getPaymentHistory";

export const WebRiwayatPembayaran = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataPaymentHistory());
  }, [dispatch]);

  const dataPayment = useSelector((state) => state.PaymentHistory.paymentHistory.enrollments);

  const formatToRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  console.log(dataPayment, "history");

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

      <div className="flex justify-center items-center mobile:mt-0 desktop:mt-[-4rem] ">
        <div className="w-[65%] h-[37rem] flex border border-[#116E63] rounded-md flex-col mobile:w-full desktop:w-[65%]  mobile:h-full desktop:h-[33rem] ">
          <div className="w-full bg-[#116E63] py-4 flex justify-center items-center">
            <h1 className="text-white font-bold text-2xl mobile:pl-4 desktop:pl-0 ">Akun</h1>
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
                <i class="fa-solid fa-pen text-[#116E63] text-lg  "></i>
                Profil Saya
              </button>
              <button
                onClick={() => {
                  navigate(`/WebUbahPassword`);
                }}
                className="text-lg w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-gear text-[#116E63] text-lg"></i>
                Ubah Password
              </button>
              <button
                onClick={() => {
                  navigate("/WebRiwayatPembayaran");
                }}
                className="text-[1.3rem] w-[80%] text-[#116E63] font-semibold flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-cart-shopping text-[#116E63] text-[1.3rem]"></i>
                Riwayat Pembayaran
              </button>
              <button
                onClick={() => {
                  dispatch(LogOut());
                }}
                key="logout"
                color="danger"
                className="text-lg w-[80%] flex items-center gap-3 border-b-2"
              >
                <i class="fa-solid fa-arrow-right-from-bracket text-[#116E63] text-lg "></i>
                Keluar
              </button>
            </div>

            {/* Riwayat Pembayaran  */}
            <div className="mobile:px-4 overflow-y-scroll  desktop:h-[28.8rem] mobile:h-full mb-4 scrollbar-hide flex flex-col  items-center mobile:w-full desktop:w-[50%]">
              {dataPayment &&
                dataPayment.map((history) => (
                  <div className="w-80 snap-start h-fit shadow-lg rounded-3xl pt-4 ">
                    <img className="w-full h-[5rem] bg-cover rounded-t-3xl" src={history.course.category[0].category.image} />
                    <div className="px-2 py-1 space-y-1 ">
                      <div className="flex justify-between text-sm ">
                        <p className="text-[#116E63] font-bold">{history.course.category[0].category.name}</p>
                        <div className="flex items-center gap-1">
                          <svg fill="#F4CE14" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{history.course.rating}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold">{history.course.name}</p>
                      <p className="text-xs">{history.course.mentor[0].mentor.name}</p>
                      <div className="flex text-xs font-normal gap-4 ">
                        <div className="flex items-center gap-1">
                          <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p className="text-[#116E63] font-semibold">{history.course.level}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{history.course.total_lesson}Modul</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg fill="#45C440" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <p>{history.course.total_duration} Menit</p>
                        </div>
                      </div>
                      <button className="flex bg-[#116E63] text-xs px-4 py-1 rounded-full gap-8 text-white font-semibold">
                        <div className="flex items-center gap-2">
                          <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.49992 9.66119e-07H3.54592L2.49692 3H0.690918L2.05292 0.276001C2.09448 0.193054 2.15831 0.123308 2.23725 0.0745645C2.31619 0.0258214 2.40714 4.07946e-06 2.49992 9.66119e-07ZM0.726918 4L3.74092 8.687L2.46992 4H0.726918ZM3.50592 4L5.03592 9.645C5.06303 9.74737 5.12324 9.8379 5.20716 9.90249C5.29109 9.96708 5.39402 10.0021 5.49992 10.0021C5.60582 10.0021 5.70875 9.96708 5.79267 9.90249C5.8766 9.8379 5.9368 9.74737 5.96392 9.645L7.49792 4H3.50592ZM8.53392 4L7.25992 8.685L10.2729 4H8.53292H8.53392ZM10.3089 3H8.50592L7.45592 9.66119e-07H8.49992C8.59287 -0.000181722 8.68403 0.0255479 8.76316 0.0743014C8.8423 0.123055 8.90628 0.192902 8.94792 0.276001L10.3089 3ZM7.44692 3H3.55692L4.60492 9.66119e-07H6.39492L7.44692 3Z"
                              fill="#E7F0EF"
                            />
                          </svg>
                          <p>{history.statusPembayaran}</p>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
