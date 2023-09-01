import Image from 'next/image';
import React from 'react';

function Greet() {
  return (
    <div className='flex flex-col items-center gap-4 justify-center  h-full '>
      <div className='w-32 h-32 relative'>
        <Image src='/images/icon-thank-you.svg' fill />
      </div>
      <h1 className='font-bold text-4xl text-[color:var(--marine-blue)]'>
        Thank You
      </h1>
      <p className='text-gray-500 text-md tracking-wider p-6 text-center'>
        Thanks for confirming your subscription! We hope you have fun using our
        plaform.If you ever need support, please feel free to email use at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Greet;
