import React, { forwardRef, useImperativeHandle, useState } from 'react';
import InputText from '@/components/InputText';

const YourInfo = forwardRef(({ dispatch, state }, ref) => {
  const [name, setName] = useState(state?.info?.name || '');
  const [email, setEmail] = useState(state?.info?.email || '');
  const [phone, setPhone] = useState(state?.info?.phone || '');

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
      dispatch({ type: 'info', payload: { name, email, phone } });
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

export default YourInfo;
