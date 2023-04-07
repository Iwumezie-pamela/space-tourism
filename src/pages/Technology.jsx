import React, { useState } from 'react';
import { technology } from '../utils';

const Technology = () => {
  const [tech, setTech] = useState(technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = tech[value];
  return (
    <section className='technology text-center relative flex flex-col items-center justify-center mx-auto h-screen lg:grid lg:grid-cols-2 lg:place-items-center lg:text-left '>
      <div className='tech-content md:mt-10 lg:px-20 '>
        <h1 className='text-gray-300 font-medium uppercase mb-6 text-3xl mt-14 lg:mb-20'>
          <span className='text-gray-500 mr-3'> 03 </span> space launch 101
        </h1>
        <div className='lg:flex lg:gap-10'>
          <article className='mb-7'>
            {tech.map((techItem, index) => {
              return (
                <button
                  type='button'
                  key={index}
                  onClick={() => setValue(index)}
                  className={` border lg:block border-gray-500 outline-none rounded-full text-3xl font-semibold w-14 h-14 mr-4 text-center lg:mb-5  pt-1 ${
                    index === value
                      ? 'bg-gray-100 text-black'
                      : 'bg-transparent text-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </article>
          <article className=''>
            <p className='text-gray-400 text-xl'>The Terminology...</p>
            <h1 className='text-white text-4xl sm:text-5xl my-3 font-light uppercase tracking-wider whitespace-nowrap'>
              {name}
            </h1>
            <p className='md:text-lg text-slate-400 mb-7 px-5 md:px-0  lg:px-0  sm:max-w-lg md:max-w-xl'>
              {description}
            </p>
          </article>
        </div>
      </div>
      <div className='image  '>
        <picture>
          <source media='(min-width:1024px)' srcSet={images.portrait} />
          <img
            src={images.landscape}
            alt={name}
            className=' mx-auto w-[90%] lg:w-[80%] lg:mt-6'
          />
        </picture>
      </div>
    </section>
  );
};

export default Technology;
