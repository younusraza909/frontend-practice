import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex items-center justify-center h-[100vh]'>
      <div className='form-box w-[70vw]  bg-white flex  h-[700px] p-4 rounded-md'>
        <div className='desktop-left-side flex-1'>
          <div className='w-full h-full'></div>
        </div>
        <div className='desktop-right-side flex-[3]'>
          <div className='mx-32 my-16'>
            <p>Hello </p>
          </div>
        </div>
      </div>
    </main>
  );
}
