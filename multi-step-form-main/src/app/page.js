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
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div class='w-full max-w-md mx-auto p-4'>
              <label class='block mb-2 text-gray-700' for='inputField'>
                Label:
              </label>
              <input
                id='inputField'
                type='text'
                class='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
