'use client';

import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);

  const stepInfo = [
    {
      title: 'Your Info',
    },
    {
      title: 'Select Plan',
    },
    {
      title: 'Add-ons',
    },
    {
      title: 'Summary',
    },
  ];

  return (
    <main className='flex items-center justify-center h-[100vh]'>
      <div className='form-box w-[70vw]  bg-white flex  h-[700px] p-4 rounded-md'>
        <div className='desktop-left-side flex-1'>
          <div className='w-full h-full m-9'>
            <div className='flex flex-col gap-10'>
              {stepInfo.map((s, index) => (
                <div className='flex items-center gap-5'>
                  <div className={`step-number`}>{index + 1}</div>
                  <div className='flex flex-col'>
                    <p className='text-[color:var(--light-gray)] text-md'>
                      STEP {index + 1}
                    </p>
                    <p className='text-white  text-lg font-bold tracking-wider'>
                      {s.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='desktop-right-side flex-[3]'>
          <div className='mx-32 my-16'>
            <h1 className='primary-heading'>Personal info</h1>
            <p className='sub-text'>
              Please provide your name, email address, and phone number.
            </p>

            <div className='w-full  mx-auto mb-10'>
              <label className='input-label' for='name'>
                Name
              </label>
              <input id='name' type='text' className='input' />
            </div>
            <div className='w-full  mx-auto  mb-10'>
              <label className='input-label' for='email'>
                Email Address
              </label>
              <input id='email' type='text' className='input' />
            </div>
            <div className='w-full  mx-auto  mb-10'>
              <label className='input-label' for='phone'>
                Phone Number
              </label>
              <input id='phone' type='text' className='input' />
            </div>

            <div className='btn-primary'>Next Step</div>
          </div>
        </div>
      </div>
    </main>
  );
}
