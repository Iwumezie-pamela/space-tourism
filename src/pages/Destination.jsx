import React, { useState } from 'react';
import destination from '../utils';

const Destination = () => {
  const [planets, setPlanet] = useState(destination);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <>
      <section className='destination text-center relative flex flex-col items-center justify-center mx-auto h-screen lg:grid lg:grid-cols-2 lg:place-items-center lg:text-left'>
        <article className=''>
          <h1 className='text-gray-100 font-medium uppercase text-2xl mt-14  lg:mb-12  '>
            <span className='text-gray-500 mr-3'> 01 </span> pick your
            destination
          </h1>

          <img
            src={images.png}
            alt={name}
            className='w-[70%] mx-auto animate-pulse mt-7'
          />
        </article>
        <div className='planet-center'>
          <article className='btn-container '>
            {planets.map((item, index) => {
              return (
                <button
                  type='button'
                  key={index}
                  onClick={() => setValue(index)}
                  className={`text-gray-300 mr-5 my-6 text-lg uppercase cursor-pointer lg:mb-8 ${
                    index === value &&
                    'border-b-2 border-b-gray-50 text-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </article>

          {/* info */}
          <article className='border-b mx-5 lg:mx-0 lg:max-w-md'>
            {' '}
            <h1 className='text-gray-50 mb-2 font-medium text-4xl tracking-wider uppercase lg:text-5xl lg:tracking-widest'>
              {name}
            </h1>
            <p className='text-gray-300 mb-2 max-w-xl '>{description}</p>
          </article>

          <article className='px-10  flex justify-between uppercase mt-5 items-center lg:px-0'>
            <div>
              <p className='text-gray-300'>avg. distance</p>
              <h2 className='text-gray-50 font-semibold text-2xl'>
                {distance}
              </h2>
            </div>
            <div>
              <p className='text-gray-300 '>est. travel time</p>
              <h2 className='text-gray-50 font-semibold text-2xl'>{travel}</h2>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Destination;
