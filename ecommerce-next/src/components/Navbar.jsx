import React from 'react';
import Image from 'next/image';

function Navbar({ showMobileNav, handleToggleNav }) {
  return (
    <nav className='flex items-center justify-between py-10 border-b-[1px]  max-md:border-none'>
      <div className='left-nav flex items-center'>
        <Image
          src='./assets/images/icon-menu.svg'
          width={20}
          height={20}
          alt='Menu Icon'
          onClick={() => handleToggleNav(true)}
          className='mr-10 hidden max-md:block cursor-pointer'
        />
        <Image
          src='./assets/images/logo.svg'
          width={150}
          height={150}
          alt='Logo Sneakers'
          className='mr-10'
        />

        <div className='desktop-navlinks max-md:hidden'>
          <ul className='flex items-center gap-10  max-lg:gap-4 justify-between text-[color:var(--grayish-blue)] text-md tracking-tighter'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='right-nav flex items-center gap-16 max-md:gap-10'>
        <div className='w-6 h-6 rounded-full relative'>
          <Image src='./assets/images/icon-cart.svg' fill alt='Cart Logo' />
        </div>
        <div className='w-12 h-12 max-md:w-8 max-md:h-8 rounded-full relative'>
          <Image
            src='/assets/images/image-avatar.png'
            fill
            alt='Profile Logo Avatar'
          />
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}

      <div
        className={`bg-white z-30 h-full absolute top-0  bottom-0 w-[60%] ${
          showMobileNav ? 'left-0' : '-left-full'
        } transition-left duration-500 ease-in-out md:-left-full`}
      >
        <div className='w-4 h-4 m-10  relative text-[color:var(--primary-color)]'>
          <Image
            src='/assets/images/icon-close.svg'
            fill
            alt='Close Icon'
            className='cursor-pointer'
            onClick={() => handleToggleNav(false)}
          />
        </div>

        <ul className='m-10 flex items-start gap-10 font-[700] text-xl flex-col'>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
