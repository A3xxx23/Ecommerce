import React from 'react'
import { IconShoppingCart } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <img src="/logo.PNG" alt="logo"  width={70}  height={55} className=' mx-4'/>
      <header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-3" >
        <nav class="flex px-3 text-medium sm:font-sm font-medium rounded-full text-gray-900 justify-center items-center " >
            <a class="relative block px-2 py-3 transition hover:text-gray-500 " aria-label="experiencia" href="/" > Home </a>
            <a class="relative block px-2 py-3 transition hover:text-gray-500 " aria-label="proyectos" href="/About" > About </a>
            <a class="relative block px-2 py-3 transition hover:text-gray-500 " aria-label="sobre-mi" href="/Contact" > Contact US</a>
            <a class="relative block px-2 py-3 transition hover:text-gray-500 " aria-label="contacto" href="/ShopAll" > Shop All </a>
        </nav>
    </header>
    <div w-full flex justify-between items-center>
    <a href="/Cart" class="flex flex-1 relative justify-end items-center transition hover:text-gray-500 z-50" aria-label="cart">
          <IconShoppingCart stroke={2} width={30} height={30}/>
    </a>
    </div>
    </div>
  )
}

export default Navbar



