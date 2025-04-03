// src/layouts/RootLayout.js
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar'; 
import { Footer } from '../components/shared/Footer';
import { Hero } from '../components/Home/Hero';
import { Sheet } from '../components/shared/sheet';
import { useGlobalStore } from '../store/global.store';


export const RootLayout = () => {
  const {pathname} = useLocation();

  const isSheetOpen = useGlobalStore(state => state.isSheetOpen);

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />

      {pathname === '/' && <Hero/>}

      <main className='container mx-auto my-8 flex-1'>
      <Outlet />
      </main>

      {isSheetOpen && <Sheet/>}

      <Footer/>
    </div>
  );
};

