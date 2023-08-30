'use client';

import Image from 'next/image';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Switch } from '@/components/ui/switch';

import { TiTick } from 'react-icons/ti';

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

const InputText = ({ text }) => {
  return (
    <span className='text-sm text-[color:var(--strawberry-red)] font-bold'>
      {text}
    </span>
  );
};

const YourInfo = forwardRef(({ onChangeStep }, ref) => {
  const [name, setName] = useState('Stephen King');
  const [email, setEmail] = useState('stephenking@gmail.com');
  const [phone, setPhone] = useState('+1 234 567 890');

  const [error, setError] = useState({
    nameError: false,
    nameErrorText: '',

    emailError: false,
    emailErrorText: '',

    phoneError: false,
    phoneErrorText: '',
  });

  const validateInfo = () => {
    let validate = true;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneRegex = /^\+1\s\d{3}\s\d{3}\s\d{3}$/;

    if (!name) {
      validate = false;
      setError((prev) => ({
        ...prev,
        nameError: true,
        nameErrorText: 'The Field is required',
      }));
      return;
    } else if (name.trim().length < 8) {
      validate = false;
      setError((prev) => ({
        ...prev,
        nameError: true,
        nameErrorText: 'Name length should be greater than 8',
      }));
      return;
    } else {
      setError((prev) => ({
        ...prev,
        nameError: false,
        nameErrorText: '',
      }));
    }

    if (!email) {
      validate = false;
      setError((prev) => ({
        ...prev,
        emailError: true,
        emailErrorText: 'Field is required',
      }));
      return;
    } else if (!emailRegex.test(email.trim())) {
      validate = false;
      setError((prev) => ({
        ...prev,
        emailError: true,
        emailErrorText: 'Invalid email format',
      }));
      return;
    } else {
      setError((prev) => ({
        ...prev,
        emailError: false,
        emailErrorText: '',
      }));
    }

    if (!phone) {
      validate = false;
      setError((prev) => ({
        ...prev,
        phoneError: true,
        phoneErrorText: 'Field is required',
      }));
      return;
    } else if (!phoneRegex.test(phone.trim())) {
      validate = false;
      setError((prev) => ({
        ...prev,
        phoneError: true,
        phoneErrorText: 'Invalid phone format',
      }));
      return;
    } else {
      setError((prev) => ({
        ...prev,
        phoneError: false,
        phoneErrorText: '',
      }));
    }

    if (validate) {
      onChangeStep();
    }
  };

  useImperativeHandle(ref, () => ({
    childFunction: validateInfo,
  }));

  return (
    <>
      <div className='w-full  mx-auto mb-10'>
        <div className='flex items-center justify-between'>
          <label className='input-label' htmlFor='name'>
            Name
          </label>
          {error.nameError && <InputText text={error?.nameErrorText} />}
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          type='text'
          className={`input ${
            error.nameError
              ? 'border border-red-800'
              : ' border border-gray-300'
          }`}
          placeholder='e.g.Stephen King'
        />
      </div>
      <div className='w-full  mx-auto  mb-10'>
        <div className='flex items-center justify-between'>
          <label className='input-label' htmlFor='email'>
            Email Address
          </label>
          {error.emailError && <InputText text={error?.emailErrorText} />}
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          type='text'
          className={`input ${
            error.emailError
              ? 'border border-red-800'
              : ' border border-gray-300'
          }`}
          placeholder='e.g.stephenking@gmail.com'
        />
      </div>
      <div className='w-full  mx-auto  mb-10'>
        <div className='flex items-center justify-between'>
          <label className='input-label' htmlFor='phone'>
            Phone Number
          </label>
          {error.phoneError && <InputText text={error?.phoneErrorText} />}
        </div>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id='phone'
          type='text'
          className={`input ${
            error.phoneError
              ? 'border border-red-800'
              : ' border border-gray-300'
          }`}
          placeholder='e.g.+1 234 567 890'
        />
      </div>
    </>
  );
});

const SelectPlan = forwardRef(({ onChangeStep }, ref) => {
  const [isMonthly, setIsMonthly] = useState(false);

  const [error, setError] = useState({
    isError: false,
    isErrorText: '',
  });

  const [plans, setPlans] = useState([
    {
      selected: false,
      image: '/images/icon-arcade.svg',
      title: 'Arcade',
      monthlyRate: 9,
      yearlyRate: 90,
    },
    {
      selected: false,
      image: '/images/icon-advanced.svg',
      title: 'Advanced',
      monthlyRate: 12,
      yearlyRate: 12,
    },
    {
      selected: false,
      image: '/images/icon-pro.svg',
      title: 'Pro',
      monthlyRate: 15,
      yearlyRate: 15,
    },
  ]);

  const validateInfo = () => {
    let selected = plans.filter((p) => p.selected);

    if (selected.length !== 0) {
      onChangeStep();
    } else {
      setError((prev) => ({
        ...prev,
        isError: true,
        isErrorText: 'You have to choose plan',
      }));
    }
  };

  useImperativeHandle(ref, () => ({
    childFunction: validateInfo,
  }));

  function handleSelect(i) {
    setPlans((prev) =>
      prev.map((pre, index) =>
        index === i ? { ...pre, selected: !pre.selected } : { ...pre }
      )
    );
  }

  return (
    <div>
      {error.isError && <InputText text={error.isErrorText} />}
      <div className='flex  items-center justify-between'>
        {plans &&
          plans.length &&
          plans.map((plan, index) => (
            <div
              onClick={() => handleSelect(index)}
              key={index}
              className={`w-[200px] h-[250px] cursor-pointer rounded-md p-4 hover:bg-[color:var(--light-blue)] hover:border-[color:var(--purplish-blue)] ${
                plan.selected &&
                'bg-[color:var(--light-blue)] border-[color:var(--purplish-blue)]'
              } border-[1px] flex flex-col justify-between gap-10`}
            >
              <div className='w-14 h-14 relative'>
                <Image src={plan.image} fill />
              </div>
              <div>
                <h3 className='text-lg font-bold text-[color:var(--marine-blue)]'>
                  {plan.title}
                </h3>
                <span className='text-[color:var(--light-gray)] text-md'>
                  {isMonthly
                    ? `${plan.monthlyRate}/mo`
                    : `${plan.yearlyRate}/yr`}

                  {!isMonthly && (
                    <p className='text-sm text-[color:var(--marine-blue)]'>
                      2 months free
                    </p>
                  )}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className='flex bg-[color:var(--light-blue)] gap-5 text-sm items-center mt-4 p-2 justify-center'>
        <p>Yearly</p>

        <Switch
          checked={isMonthly}
          onCheckedChange={() => setIsMonthly(!isMonthly)}
        />
        <p>Monthly</p>
      </div>
    </div>
  );
});

const AddOns = forwardRef(({ onChangeStep }, ref) => {
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

  const validateInfo = () => {
    onChangeStep();
  };

  useImperativeHandle(ref, () => ({
    childFunction: validateInfo,
  }));

  function handleSelect(index) {
    setAddOns((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, selected: !p.selected } : { ...p }
      )
    );
  }

  return (
    <div className='flex flex-col gap-6'>
      {addOns &&
        addOns.map((add, index) => (
          <div
            className={`flex items-center gap-5 border-[1px] ${
              add.selected &&
              'border-[color:var(--marine-blue)] bg-[color:var(--light-blue)]'
            }  p-7 py-3 cursor-pointer rounded-lg`}
          >
            <div
              onClick={() => handleSelect(index)}
              className={`w-5 h-5 ${
                add.selected ? 'bg-[color:var(--purplish-blue)]' : 'bg-white'
              } rounded-md border-[1px] border-gray-400 flex items-center justify-center`}
            >
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
});

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

  const userInfoRef = useRef(null);
  const planRef = useRef(null);
  const addOnRef = useRef(null);

  function renderComponent() {
    switch (step) {
      case 1:
        return (
          <YourInfo
            ref={userInfoRef}
            onChangeStep={() => setStep((prev) => prev + 1)}
          />
        );
      case 2:
        return (
          <SelectPlan
            ref={planRef}
            onChangeStep={() => setStep((prev) => prev + 1)}
          />
        );

      case 3:
        return (
          <AddOns
            ref={addOnRef}
            onChangeStep={() => setStep((prev) => prev + 1)}
          />
        );

      case 4:
        return <Summary />;
      default:
        break;
    }
  }

  function handleNextClick() {
    switch (step) {
      case 1:
        userInfoRef && userInfoRef.current.childFunction();
        break;
      case 2:
        planRef && planRef.current.childFunction();
        break;
      case 3:
        addOnRef && addOnRef.current.childFunction();
        break;
      default:
        break;
    }
  }

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    // setStep((value) => value + 1);
    handleNextClick();
  };

  return (
    <main className='flex items-center justify-center h-[100vh] '>
      <div className='form-box w-[70vw]  bg-white flex  h-[700px] p-4 rounded-md'>
        <div className='desktop-left-side flex-1'>
          <div className='w-full h-full m-9'>
            <div className='flex flex-col gap-10'>
              {stepInfo.map((s, index) => (
                <div className='flex items-center gap-5' key={index}>
                  <div
                    className={`step-number ${
                      index + 1 === step
                        ? 'text-black bg-[color:var(--pastel-blue)]'
                        : 'text-white'
                    }`}
                  >
                    {index + 1}
                  </div>
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

            <div className='mt-20 flex items-center'>
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
