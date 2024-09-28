import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../auth/user/Register";
import { Login } from "../auth/user/Login";
import OtpRegister from "../auth/user/Otpregister";
import { ForgetPass } from "../auth/user/ForgetPass";
import { BerandaKelasSaya } from "../pages/BerandaKelasSaya";
import { BerandaKelas } from "../pages/BerandaKelas";
import { DetailKelasPembayaran } from "../assets/components/DetailKelasPembayaran";
import PembayaranSukses from "../pages/PembayaranSukses";
import { MulaiBelajar } from "../assets/components/MulaiBelajar";
import { LoginAdmin } from "../auth/admin/LoginAdmin";
import { HomeAdm } from "../pages/admin/HomeAdm";
import { WebAkunProfil } from "../pages/notifikasi/WebAkunProfil";
import WebNotifikasi from "../assets/components/WebNotifikasi";
import { WebUbahPassword } from "../pages/notifikasi/webUbahPassword";
import { WebRiwayatPembayaran } from "../pages/notifikasi/WebRiwayatPembayaran";
import { DetailKelas } from "../pages/DetailKelas";
import { UpdatePass } from "../auth/user/UpdatePass";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import { Pagesearch } from "../pages/pagesearch";
import { InputEmail } from "../auth/user/InputEmail";
import { MateriBelajarMobile } from "../assets/components/MateriBelajarMobile";
import TokenProtected from "../assets/components/protected/protected";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpRegister />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/updatepass" element={<UpdatePass />} />
        <Route
          path="/kelassaya"
          element={
            <TokenProtected>
              <BerandaKelasSaya />
            </TokenProtected>
          }
        />
        <Route path="/berandakelas" element={<BerandaKelas />} />
        <Route path="/detailKelas/:courseId" element={<DetailKelas />} />
        <Route
          path="/detailKelasPembayaran/:courseId"
          element={
            <TokenProtected>
              <DetailKelasPembayaran />
            </TokenProtected>
          }
        />
        <Route path="/pembayaranSukses/:courseId" element={<PembayaranSukses />} />
        <Route path="/mulaiBelajar" element={<MulaiBelajar />} />
        <Route
          path="/WebAkunProfil"
          element={
            <TokenProtected>
              <WebAkunProfil />
            </TokenProtected>
          }
        />
        <Route
          path="/WebNotifikasi"
          element={
            <TokenProtected>
              <WebNotifikasi />
            </TokenProtected>
          }
        />
        <Route
          path="/WebUbahPassword"
          element={
            <TokenProtected>
              <WebUbahPassword />
            </TokenProtected>
          }
        />
        <Route
          path="/WebRiwayatPembayaran"
          element={
            <TokenProtected>
              <WebRiwayatPembayaran />
            </TokenProtected>
          }
        />
        <Route path="/popular/:courseId" element={<KursusPopuler />} />
        <Route path="/isDone/:courseId" element={<MateriBelajarMobile />} />
        <Route path="/pagesearch/:namesearch" element={<Pagesearch />} />
        <Route path="/inputEmail" element={<InputEmail />} />

        {/* Admin */}
        <Route path="/loginAdm" element={<LoginAdmin />} />
        <Route
          path="/HomeAdm"
          element={
            <TokenProtected>
              <HomeAdm />
            </TokenProtected>
          }
        />
        {/* Admin End */}
      </Routes>
    </BrowserRouter>
  );
};
