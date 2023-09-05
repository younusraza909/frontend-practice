import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import InputText from '../InputText';
import { Switch } from '../ui/switch';
import Image from 'next/image';

const SelectPlan = forwardRef(({ dispatch, state }, ref) => {
  const [isMonthly, setIsMonthly] = useState(state?.plan?.isMonthly || false);

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

  useEffect(() => {
    if (state?.plan?.selectedPlan) {
      let copy = [...plans];
      copy = copy.map((c) =>
        c.title === state?.plan?.selectedPlan?.title
          ? { ...state?.plan?.selectedPlan }
          : { ...c }
      );

      setPlans(copy);
    }
  }, []);

  const validateInfo = () => {
    let selected = plans.filter((p) => p.selected);

    if (selected.length !== 0) {
      dispatch({
        type: 'plan',
        payload: { isMonthly, selectedPlan: selected[0] },
      });
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
      <div className='flex max-xl:flex-col  gap-5 justify-between  items-center'>
        {plans &&
          plans.length &&
          plans.map((plan, index) => (
            <div
              onClick={() => handleSelect(index)}
              key={index}
              className={`w-[170px] h-[200px] cursor-pointer rounded-md p-4 hover:bg-[color:var(--light-blue)] hover:border-[color:var(--purplish-blue)] ${
                plan.selected &&
                'bg-[color:var(--light-blue)] border-[color:var(--purplish-blue)]'
              } border-[1px] flex flex-col justify-between max-xl:flex-row max-xl:gap-5 max-xl:w-full max-xl:h-auto max-xl:justify-start`}
            >
              <div className='w-10 h-10 relative'>
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

export default SelectPlan;
