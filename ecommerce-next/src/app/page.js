'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <main className='max-w-7xl mx-auto max-xl:max-w-5xl max-lg:max-w-3xl '>
      <div
        className={`bg-[#000] bg-opacity-50 z-10 w-full h-full absolute inset-0 ${
          mobileNav ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition duration-500 ease-in-out md:-left-full`}
      />

      <Navbar
        showMobileNav={mobileNav}
        handleToggleNav={(val) => setMobileNav(val)}
        handleToggleCart={() => setCart(!cart)}
      />

      <section className='product  product-main-section'>
        <div className='image-showcase flex-1 w-full'>
          <div className='main-product-image'>
            <Image src='/assets/images/image-product-1.jpg' fill />
            <div className='slider-btn left-10'>
              <Image
                src='/assets/images/icon-previous.svg'
                width={12}
                height={12}
              />
            </div>
            <div className='slider-btn right-10'>
              <Image
                src='/assets/images/icon-next.svg'
                width={12}
                height={12}
              />
            </div>
          </div>
          {/* Only Showing on Desktop Size Devices */}
          <div className='product-images-slider'>
            <div className='w-32 h-32 relative'>
              <Image
                src='/assets/images/image-product-1-thumbnail.jpg'
                fill
                className='rounded-xl'
              />
            </div>
            <div className='w-32 h-32 relative'>
              <Image
                src='/assets/images/image-product-2-thumbnail.jpg'
                fill
                className='rounded-xl'
              />
            </div>
            <div className='w-32 h-32 relative'>
              <Image
                src='/assets/images/image-product-3-thumbnail.jpg'
                fill
                className='rounded-xl'
              />
            </div>
            <div className='w-32 h-32 relative'>
              <Image
                src='/assets/images/image-product-4-thumbnail.jpg'
                fill
                className='rounded-xl'
              />
            </div>
          </div>
        </div>
        <div className='product-info flex-1 max-md:px-10'>
          <h6 className='text-[color:var(--primary-color)] font-semibold my-4'>
            SNEAKER COMPANY
          </h6>
          <h1 className='font-semibold text-5xl max-md:text-4xl tracking-wider mb-10'>
            Fall Limited Edition Sneakers
          </h1>
          <p className='text-[color:var(--dark-grayish-blue-2)] leading-7 mb-5'>
            These low-profile sneakers are your perfect causual wear
            companion.Featuring a durable rubber outer sole, they'll withstand
            everything the weather can offer.
          </p>
          <div className='price-box flex flex-col max-md:flex-row max-md:justify-between items-start my-10'>
            <div className='prices flex gap-3 '>
              <p className='text-2xl font-[700] tracking-wider'>$125.00</p>

              <div className='discount w-auto p-1 rounded-md bg-[color:var(--primary-color-light)] text-[color:var(--primary-color)] '>
                <p className='font-bold text-sm'>50%</p>
              </div>
            </div>
            <p className='text-[color:var(--grayish-blue)] line-through'>
              $250.00
            </p>
          </div>
          <div className='cart flex gap-16 max-md:gap-9 my-5 max-md:flex-col'>
            <div className='cart-counter px-2 py-3 rounded-md flex max-md:justify-between max-md:px-5  items-center gap-10 bg-[color:var(--light-grayish-blue)]'>
              <div className='counter-btn'>
                <p className='decrease-counter-btn text-lg max-md:text-2xl font-bold text-[color:var(--primary-color)] cursor-pointer'>
                  -
                </p>
              </div>
              <p className='counter-value text-sm max-md:text-2xl font-bold'>
                0
              </p>
              <div className='counter-btn '>
                <p className='increase-counter-btn  text-lg max-md:text-2xl font-bold text-[color:var(--primary-color)] cursor-pointer'>
                  +
                </p>
              </div>
            </div>
            <div className=' cursor-pointer card-cta-btn bg-[color:var(--primary-color)] text-white px-10 rounded-lg py-3 max-xl:py-0 flex items-center  justify-between max-md:justify-center max-md:py-4 gap-11'>
              <div className=''>
                <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                    fill='#fff'
                    fillRule='nonzero'
                  />
                </svg>
              </div>
              <p className='whitespace-nowrap text-sm font-bold max-xl:text-xs max-md:text-lg'>
                Add to card
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart List */}
      {cart && (
        <div className='absolute bg-white shadow-lg z-10 w-96 top-20 right-36 mt-5 rounded-xl max-2xl:right-10 max-md:w-[90%] max-md:mx-auto max-md:top-24 max-md:h-[45%]'>
          <div className='font-bold text-lg px-2 py-4 border-b-[1px]'>
            <p>Cart</p>
          </div>

          <div className='justify-between flex flex-col h-[90%] '>
            <div className='cart-items-list flex flex-col  gap-10 w-[90%] mx-auto'>
              <div className='cart-item flex mt-3 px-2 gap-3  justify-between items-center'>
                <Image
                  src='/assets/images/image-product-1-thumbnail.jpg'
                  height={50}
                  width={50}
                  className='rounded-xl'
                />
                <p className=' text-[color:var(--grayish-blue)]'>
                  Fall Limited Edition Sneakers $125.00 x 3{' '}
                  <strong className='text-black'>$375.00</strong>
                </p>
                <Image
                  src='/assets/images/icon-delete.svg'
                  height={15}
                  width={15}
                  className='cursor-pointer'
                />
              </div>
            </div>

            <div className=' cursor-pointer bg-[color:var(--primary-color)] text-white px-10 rounded-lg py-3  w-[90%] mx-auto mt-7 mb-10 max-md:py-5'>
              <p className='whitespace-nowrap text-sm font-bold max-xl:text-xs max-md:text-lg'>
                Checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
