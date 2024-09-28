import React from "react";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import Hero from "../assets/components/Hero";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import Navbarr from "../assets/components/navbar";
import { NavbarResponsive } from "../assets/components/elements/NavbarResponsive";
import { Footer } from "../assets/components/Footer";
import { CookieKeys, CookieStorage } from "../utils/cookies";

export const Home = () => {
  const token = CookieStorage.get(CookieKeys.AuthToken);

  return (
    <div className="overflow-hidden">
      <div className="hidden desktop:block">
        <Navbarr />
      </div>
      <div className="block desktop:hidden">
        {token && token.length ? <NavbarResponsive /> : <Navbarr/>}
      </div>
      <Hero />
      <KategoriBelajar />
      <KursusPopuler />
      <Footer />
    </div>
  );
};
