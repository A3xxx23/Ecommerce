import React from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <header className='fixed top-0 z-10 w-full'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-2'>
        <img src="/logo.PNG" alt="logo" width={70} height={55} className='mx-4' />
        
        <nav className='flex space-x-4 text-gray-900'>
          <a className='relative block px-2 py-3 transition hover:text-gray-500' aria-label="Home" href="/">Home</a>
          <a className='relative block px-2 py-3 transition hover:text-gray-500' aria-label="About" href="/About">About</a>
          <a className='relative block px-2 py-3 transition hover:text-gray-500' aria-label="Contact" href="/Contact">Contact Us</a>
          <a className='relative block px-2 py-3 transition hover:text-gray-500' aria-label="Shop all" href="/ShopAll">Shop All</a>
        </nav>

        <div className='flex items-center space-x-4'>
          <a href="/Wishlist" className='flex justify-center items-center transition hover:text-gray-500' aria-label="Wishlist">
            <IconHeart stroke={2} width={30} height={30} />
          </a>
          <a href="/Cart" className='flex justify-center items-center transition hover:text-gray-500' aria-label="Cart">
            <IconShoppingCart stroke={2} width={30} height={30} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;




