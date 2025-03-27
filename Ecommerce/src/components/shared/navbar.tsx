import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";
import { IconSearch, IconShoppingCart, IconUser,IconMenu2 } from '@tabler/icons-react';
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header className='flex justify-between items-center py-4 px-5 lg:px-12'>

        <Logo/>

        <nav className='space-x-5 hidden md:flex'>
        
          {navbarLinks.map((link) => (
            <NavLink 
              key={link.id} 
              to={link.href} 
              className={({ isActive }) => 
                isActive 
                  ? 'text-black hover:text-gray-600 transition mx-2' 
                  : 'text-black hover:text-gray-500 transition mx-2'
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5"> 
          <button>
            <IconSearch stroke={1.5} width={25} height={25} className="text-black"/>
          </button>

          <div className="relative">
            <Link to="/account">
              <IconUser stroke={1.5} width={25} height={25} className="text-black" />
            </Link>
          </div>

          <button className="relative">
            <span className="absolute top-[-5px] right-[-10px] h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">0</span>
            <IconShoppingCart stroke={1.5} width={25} height={25} className="text-black"/>
          </button>
        </div>

        <button className="md:hidden">
            <IconMenu2 stroke={1.5} width={25} height={25} className="text-black"/>

        </button>
      </header>
    </div>
  );
};


