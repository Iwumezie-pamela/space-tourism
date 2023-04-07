import React, { useState } from 'react';
import { crew } from '../utils';

const Crew = () => {
  const [crews, setCrews] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crews[value];

  return (
    <section className='crew text-center relative flex flex-col items-center justify-center mx-auto  h-screen lg:grid lg:grid-cols-2 lg:place-items-center lg:text-left '>
      <div className='crew-center mt-10 md:mt-12'>
        <h1 className='text-gray-300 font-medium uppercase mb-3 text-3xl mt-14  lg:mb-20'>
          <span className='text-gray-500 mr-3'> 02 </span> meet your crew
        </h1>
        <article>
          <p className='text-gray-500 mb-4 uppercase text-2xl lg:text-3xl'>
            {role}
          </p>
          <h2 className='text-gray-50 uppercase text-4xl mb-3 whitespace-nowrap'>
            {name}
          </h2>
          <p className='text-gray-200 px-10 md:px-20 md:max-w-3xl lg:max-w-md lg:px-0 lg:mb-32 md:text-lg'>
            {bio}
          </p>
        </article>

        <article className=''>
          {crews.map((item, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={() => setValue(index)}
                className={` mr-5 rounded-full h-4 w-4 my-6  cursor-pointer lg:mb-8 ${
                  index === value ? 'bg-white' : 'bg-gray-500'
                }`}
              ></button>
            );
          })}
        </article>
      </div>
      <article>
        <img
          src={images.png}
          className=' object-cover  w-[40%] md:mt-10 sm:w-[50%] md:w-[45%] mx-auto lg:w-[65%] xl:w-[80%]'
          alt={name}
        />
      </article>
    </section>
  );
};

export default Crew;
