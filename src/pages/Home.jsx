import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <section className='home text-center relative flex flex-col items-center justify-center mx-auto h-screen lg:grid lg:grid-cols-2 lg:place-items-center lg:text-left'>
        <div className='overlay'>
          <h1 className=' text-gray-400 text-base tracking-wider mt-20 lg:text-xl lg:px-20'>
            SO, YOU WANT TO TRAVEL TO{' '}
            <span className='block text-white text-8xl mt-6 tracking-normal lg:text-9xl'>
              SPACE
            </span>
          </h1>
          <p className='p-8 max-w-xl text-gray-400 text-lg lg:px-20 lg:text-base'>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className='mt-10 btn flex items-center justify-center bg-white  rounded-full h-40 w-40 animate-pulse lg:mt-10 lg:h-52 lg:w-52'>
          <Link
            to='/destination'
            className='text-black text-2xl font-light tracking-wider uppercase'
          >
            Explore
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
