import React from 'react';

import Navbar from 'components/Navbars/AuthNavbar.js';
import FooterSmall from 'components/Footers/FooterSmall.js';
import img from '../assets/diseño-de-fondo2.jpg';

import Login from 'views/auth/Login.js';
import { WelcomeBanner } from 'components/Banners/WelcomeBanner';

export default function Auth() {
  return (
    <main className="flex w-full h-auto min-h-screen overflow-hidden">
      <div className="w-2/4 h-auto min-h-screen hidden md:block lg:block">
        <img className="w-full h-full object-cover" alt='fondo' src={img}></img>
      </div>
      <div className="mb-4 flex-1">
        <WelcomeBanner />
        <Login />
      </div>
    </main>
  );
}
