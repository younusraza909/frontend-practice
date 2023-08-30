'use client';

import Image from 'next/image';
import { useState } from 'react';
import ToggleSwitch from './component/ToggleSwitch';
import { TiTick } from 'react-icons/ti';

let plans = [
  {
    image: '/images/icon-arcade.svg',
    title: 'Arcade',
    monthlyRate: 9,
    yearlyRate: 0,
  },
  {
    image: '/images/icon-advanced.svg',
    title: 'Advanced',
    monthlyRate: 12,
    yearlyRate: 0,
  },
  {
    image: '/images/icon-pro.svg',
    title: 'Pro',
    monthlyRate: 15,
    yearlyRate: 0,
  },
];

const stepInfo = [
  {
    title: 'Your Info',
    primaryHeading: 'Personal info',
    secondaryHeading:
      'Please provide your name, email address, and phone number.',
  },
  {
    title: 'Select Plan',
    primaryHeading: 'Select Plan',
    secondaryHeading: 'You have the option of monthly and yearly billing.',
  },
  {
    title: 'Add-ons',
    primaryHeading: 'Pick add-ons',
    secondaryHeading: 'Add-ons help enhance your gaming experience',
  },
  {
    title: 'Summary',
    primaryHeading: 'Finishing up',
    secondaryHeading: 'Double-check everything looks OK before confirming',
  },
];

function YourInfo() {
  return (
    <>
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
    </>
  );
}

function SelectPlan() {
  return (
    <div>
      <div className='flex  items-center justify-between'>
        {plans &&
          plans.length &&
          plans.map((plan) => (
            <div className='w-[200px] h-[250px] cursor-pointer rounded-md p-4 hover:bg-[color:var(--light-blue)] hover:border-[color:var(--purplish-blue)] border-[1px] flex flex-col justify-between gap-10'>
              <div className='w-14 h-14 relative'>
                <Image src={plan.image} fill />
              </div>
              <div>
                <h3 className='text-lg font-bold text-[color:var(--marine-blue)]'>
                  {plan.title}
                </h3>
                <span className='text-[color:var(--light-gray)] text-md'>
                  ${plan.monthlyRate}/mo
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function AddOns() {
  const [addOns, setAddOns] = useState([
    {
      selected: false,
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      selected: false,
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      selected: false,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ]);
  return (
    <div className='flex flex-col gap-6'>
      {addOns &&
        addOns.map((add) => (
          <div className='flex items-center gap-5 border-[1px] border-[color:var(--pastel-blue)] p-7 py-3 cursor-pointer rounded-lg'>
            <div className='w-5 h-5 rounded-md bg-[color:var(--purplish-blue)] border-[1px] border-gray-400 flex items-center justify-center'>
              <TiTick color='white' />
            </div>
            <div>
              <h1 className='font-bold text-xl tracking-wider text-[color:var(--marine-blue)]'>
                {add?.title}
              </h1>
              <p className='text-gray-400 tracking-wider text-lg'>
                {add?.description}
              </p>
            </div>
            <div className='ml-auto'>
              <span className='text-[color:var(--marine-blue)]'>
                +${add?.monthlyPrice}/mo
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}

function Summary() {
  return (
    <div className='text-gray-400'>
      <div className='flex flex-col gap-4 bg-[color:var(--light-blue)] p-7'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-bold text-lg text-[color:var(--marine-blue)] tracking-wide'>
              Arcade (monthly)
            </h3>
            <a className='text-md text-gray-400 underline cursor-pointer'>
              Change
            </a>
          </div>
          <p className='font-bold text-lg text-[color:var(--marine-blue)]'>
            $9/mo
          </p>
        </div>
        <hr className='mt-4 mb-2' />
        <div className='flex items-center justify-between'>
          <div>
            <h3>Online service</h3>
          </div>
          <p className='text-[color:var(--marine-blue)]'>+$1/mo</p>
        </div>{' '}
        <div className='flex items-center justify-between'>
          <div>
            <h3>Larger storage</h3>
          </div>
          <p className='text-[color:var(--marine-blue)]'>+$1/mo</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <h3>Total (per month)</h3>
        </div>
        <p className='text-[color:var(--purplish-blue)] font-bold text-2xl mt-7'>
          +$12/mo
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState(1);

  function renderComponent() {
    switch (step) {
      case 1:
        return <YourInfo />;
      case 2:
        return <SelectPlan />;

      case 3:
        return <AddOns />;

      case 4:
        return <Summary />;
      default:
        break;
    }
  }

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  return (
    <main className='flex items-center justify-center h-[100vh] '>
      <div className='form-box w-[70vw]  bg-white flex  h-[700px] p-4 rounded-md relative'>
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
            <h1 className='primary-heading'>
              {stepInfo[step - 1]?.primaryHeading}
            </h1>
            <p className='sub-text'>{stepInfo[step - 1]?.secondaryHeading}</p>
            {renderComponent()}
            <div className='mt-20 flex items-center w-[700px] absolute bottom-10'>
              {step !== 1 && (
                <div className='btn-secondary' onClick={onBack}>
                  Go Back
                </div>
              )}
              <div className='btn-primary' onClick={onNext}>
                Next Step
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
