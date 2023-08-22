'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <main className='max-w-7xl mx-auto max-xl:max-w-5xl max-lg:max-w-3xl max-md:px-10'>
      {mobileNav && (
        <div className='bg-[#000] bg-opacity-50 z-10 w-full h-full absolute inset-0' />
      )}
      <Navbar
        showMobileNav={mobileNav}
        handleToggleNav={(val) => setMobileNav(val)}
      />
    </main>
  );
}
