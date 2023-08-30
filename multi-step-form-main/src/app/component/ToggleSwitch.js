import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='flex items-center space-x-2'>
      <span className={`text-${isChecked ? 'blue' : 'gray'}-500`}>Off</span>

      <label className='relative inline-flex items-center h-6 w-11 cursor-pointer'>
        <input
          type='checkbox'
          onClick={handleToggle}
          className='hidden'
          checked={isChecked}
        />
        <span
          className={`slider h-5 w-5 rounded-full bg-${
            isChecked ? 'blue' : 'gray'
          }-300 transition-transform ease-in-out duration-300 transform ${
            isChecked ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></span>
      </label>

      <span className={`text-${isChecked ? 'blue' : 'gray'}-500`}>On</span>
    </div>
  );
};

export default ToggleSwitch;
