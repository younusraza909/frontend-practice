import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { TiTick } from 'react-icons/ti';

const AddOns = forwardRef(({ dispatch, state }, ref) => {
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

  useEffect(() => {
    if (state?.addsOn) {
      const updatedLocalAddOns = addOns.map((localAddOn) => {
        const matchingReduxAddOn = state?.addsOn.find(
          (reduxAddOn) => reduxAddOn.title === localAddOn.title
        );

        if (matchingReduxAddOn) {
          return { ...localAddOn, selected: true };
        }
        return localAddOn;
      });

      setAddOns(updatedLocalAddOns);
    }
  }, []);

  const validateInfo = () => {
    let selectedAdd = addOns.filter((add) => add.selected);
    dispatch({ type: 'addsOn', payload: selectedAdd });
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

export default AddOns;
