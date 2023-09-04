'use client';

import { useRef, useReducer } from 'react';

import YourInfo from '@/components/form/YourInfo';
import SelectPlan from '@/components/form/SelectPlan';
import AddOns from '@/components/form/AddOns';
import Summary from '@/components/form/Summary';
import Greet from '@/components/Greet';

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'info':
      return { ...state, info: action.payload, step: state.step + 1 };
    case 'plan':
      return { ...state, plan: action.payload, step: state.step + 1 };
    case 'addsOn':
      return { ...state, addsOn: action.payload, step: state.step + 1 };
    case 'increaseStep':
      return { ...state, step: state.step + 1 };
    case 'decreaseStep':
      return { ...state, step: state.step - 1 };
    case 'switchPlan':
      return {
        ...state,
        plan: { ...state?.plan, isMonthly: !state?.plan?.isMonthly },
      };
    case 'finishedCheckout':
      return {
        ...state,
        finishedCheckout: true,
      };
    default:
      return state;
  }
};

const intialState = {
  step: 1,
  info: {
    name: 'Stephen King',
    email: 'stephenking@gmail.com',
    phone: '+1 234 567 890',
  },
  plan: {
    isMonthly: true,
    selectedPlan: null,
  },
  addsOn: null,
  finishedCheckout: false,
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, intialState);

  const userInfoRef = useRef(null);
  const planRef = useRef(null);
  const addOnRef = useRef(null);

  const summaryRef = useRef(null);

  function renderComponent() {
    switch (state?.step) {
      case 1:
        return <YourInfo ref={userInfoRef} dispatch={dispatch} state={state} />;
      case 2:
        return <SelectPlan ref={planRef} dispatch={dispatch} state={state} />;

      case 3:
        return <AddOns ref={addOnRef} dispatch={dispatch} state={state} />;

      case 4:
        return <Summary ref={summaryRef} dispatch={dispatch} state={state} />;
      default:
        break;
    }
  }

  function handleNextClick() {
    switch (state?.step) {
      case 1:
        userInfoRef && userInfoRef.current.childFunction();
        break;
      case 2:
        planRef && planRef.current.childFunction();
        break;
      case 3:
        addOnRef && addOnRef.current.childFunction();
        break;
      case 4:
        summaryRef && summaryRef.current.childFunction();
      default:
        break;
    }
  }

  const onBack = () => {
    dispatch({ type: 'decreaseStep' });
  };

  const onNext = () => {
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
                      index + 1 === state?.step
                        ? 'text-black bg-[color:var(--pastel-blue)]'
                        : 'text-white'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className='flex flex-col max-xl:text-sm'>
                    <p className='text-[color:var(--light-gray)] text-md'>
                      STEP {index + 1}
                    </p>
                    <p className='text-white  max-xl:text-sm  text-lg font-bold tracking-wider'>
                      {s.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='desktop-right-side flex-[3]'>
          <div className='mx-32 max-xl:mx-10 max-xl:my-5 my-16 h-full '>
            {state?.finishedCheckout ? (
              <Greet />
            ) : (
              <>
                <h1 className='primary-heading'>
                  {stepInfo[state?.step - 1]?.primaryHeading}
                </h1>
                <p className='sub-text'>
                  {stepInfo[state?.step - 1]?.secondaryHeading}
                </p>
                {renderComponent()}

                <div className='mt-20 flex items-center'>
                  {state?.step !== 1 && (
                    <div className='btn-secondary' onClick={onBack}>
                      Go Back
                    </div>
                  )}
                  <div className='btn-primary' onClick={onNext}>
                    Next Step
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
