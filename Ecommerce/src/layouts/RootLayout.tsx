// src/layouts/RootLayout.js
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar'; 
import { Footer } from '../components/shared/Footer';
import { Hero } from '../components/Home/Hero';

export const RootLayout = () => {
  const {pathname} = useLocation();

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />

      {pathname === '/' && <Hero/>}

      <main className='container my-8 flex-1'>
      <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

