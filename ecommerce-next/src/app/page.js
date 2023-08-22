import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <nav className='flex items-center justify-between'>
        <div className='left-nav'>
          <Image
            src='./assets/images/logo.svg'
            width={150}
            height={150}
            alt='Logo Sneakers'
          />

          <div className='navlinks'>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='right-nav'>
          <Image
            src='./assets/images/icon-cart.svg'
            width={50}
            height={50}
            alt='Cart Logo'
          />
          <div className='profile-image'>
            <Image
              src='/assets/images/image-avatar.png'
              width={60}
              height={60}
              alt='Profile Logo Avatar'
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
