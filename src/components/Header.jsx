import React, { useState } from 'react';
import logo from '../shared/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const links = [
    {
      id: 1,
      text: '00 Home',
      path: '/',
    },
    {
      id: 2,
      text: '01 Destination',
      path: '/destination',
    },
    {
      id: 3,
      text: '02 Crew',
      path: '/crew',
    },
    {
      id: 4,
      text: '03 Technology',
      path: '/technology',
    },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='header fixed top-0 z-10 w-full h-20'>
      <nav className=' p-5 flex items-center justify-between mb-40'>
        <Link to='/'>
          <img src={logo} alt='logo' className='' />
        </Link>

        <hr className='hidden md:hidden xl:flex xl:ml-80 xl:w-1/3' />
        <div className='links hidden md:flex'>
          {links.map((item) => {
            const { id, text, path } = item;
            return (
              <NavLink
                to={path}
                key={id}
                className={({ isActive }) => {
                  return isActive
                    ? 'text-gray-300 mr-4 md:mr-6 lg:mr-10 text-base font-medium whitespace-nowrap active-link'
                    : 'text-gray-300 mr-4 md:mr-6 lg:mr-10 text-base font-medium whitespace-nowrap';
                }}
              >
                {text}
              </NavLink>
            );
          })}
        </div>

        {/* icons */}
        <div
          className='block md:hidden cursor-pointer z-10 text-gray-300 ease-in-out duration-300'
          onClick={handleNav}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* mobile menu */}
        {nav && (
          <div className='flex flex-col w-[90%] pt-7 left-0 right-0 mx-auto absolute top-[110%] justify-center items-center bg-[#111827] md:hidden transition-all ease-in-out duration-200 text-lg text-gray-400 font-medium'>
            {links.map((item) => {
              const { id, text, path } = item;
              return (
                <NavLink
                  to={path}
                  key={id}
                  className={({ isActive }) => {
                    return isActive ? 'link active-link' : 'link';
                  }}
                  onClick={handleNav}
                >
                  {text}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
