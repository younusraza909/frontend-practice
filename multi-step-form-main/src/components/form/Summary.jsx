import React, { forwardRef, useImperativeHandle } from 'react';

const Summary = forwardRef(({ dispatch, state }, ref) => {
  let plan = state?.plan?.selectedPlan;
  let addsOn = state?.addsOn;
  let isMonthly = state?.plan?.isMonthly;

  let planRate = isMonthly ? plan.monthlyRate : plan?.yearlyRate;

  function calculateTotal() {
    let addRate = state?.addsOn.reduce(
      (acc, curr) =>
        isMonthly ? acc + curr?.monthlyPrice : acc + curr?.yearlyPrice,
      0
    );

    return addRate + planRate;
  }

  let total = calculateTotal();

  useImperativeHandle(ref, () => ({
    childFunction: () => dispatch({ type: 'finishedCheckout' }),
  }));

  return (
    <div className='text-gray-400'>
      <div className='flex flex-col gap-4 bg-[color:var(--light-blue)] p-7'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-bold max-lg:text-base text-lg text-[color:var(--marine-blue)] tracking-wide'>
              {plan?.title} {isMonthly ? `(monthly)` : `(yearly)`}
            </h3>
            <a
              className='text-gray-400 underline cursor-pointer max-lg:text-sm'
              onClick={() => dispatch({ type: 'switchPlan' })}
            >
              Change
            </a>
          </div>
          <p className='font-bold text-lg text-[color:var(--marine-blue)] max-lg:text-base'>
            {`$${planRate}/${isMonthly ? 'mo' : 'yr'}`}
          </p>
        </div>
        <hr className='mt-4 mb-2' />
        {addsOn &&
          addsOn.length > 0 &&
          addsOn.map((add) => {
            let addRate = isMonthly ? add?.monthlyPrice : add?.yearlyPrice;
            return (
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='max-lg:text-sm'>{add?.title}</h3>
                </div>
                <p className='text-[color:var(--marine-blue)] max-lg:text-sm'>{`+$${addRate}/${
                  isMonthly ? 'mo' : 'yr'
                }`}</p>
              </div>
            );
          })}
      </div>
      <div className='flex items-center justify-between max-lg:text-sm'>
        <div>
          <h3>Total (per month)</h3>
        </div>
        <p className='text-[color:var(--purplish-blue)] max-lg:text-lg font-bold text-2xl mt-7'>
          {`+$${total}/${isMonthly ? 'mo' : 'yr'}`}
        </p>
      </div>
    </div>
  );
});
export default Summary;
