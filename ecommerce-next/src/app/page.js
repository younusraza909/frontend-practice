import Image from 'next/image';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto max-xl:max-w-5xl max-lg:max-w-3xl'>
      <nav className='flex items-center justify-between py-10 border-b-[1px]'>
        <div className='left-nav flex items-center'>
          <Image
            src='./assets/images/logo.svg'
            width={150}
            height={150}
            alt='Logo Sneakers'
            className='mr-10'
          />

          <div className='navlinks'>
            <ul className='flex items-center justify-between text-[color:var(--grayish-blue)] text-md tracking-tighter'>
              <li className='mx-2'>Collections</li>
              <li className='mx-2'>Men</li>
              <li className='mx-2'>Women</li>
              <li className='mx-2'>About</li>
              <li className='mx-2'>Contact</li>
            </ul>
          </div>
        </div>
        <div className='right-nav flex items-center gap-16'>
          <div className='w-6 h-6 rounded-full relative'>
            <Image src='./assets/images/icon-cart.svg' fill alt='Cart Logo' />
          </div>
          <div className='w-12 h-12 rounded-full relative'>
            <Image
              src='/assets/images/image-avatar.png'
              fill
              alt='Profile Logo Avatar'
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
