import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mt-20 my-container flex flex-col items-center justify-between lg:flex-row'>
        {/* Text Content */}
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
            One Step <br className='hidden md:block' /> Closer To Your <br/>
              <span className='inline-block text-blue-400'>Dream Job</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
          </div>
          <div>
            <Link to=''  >
              <div className='inline-flex w-full h-full'>
                <p className='mr-3 btn btn-info'>Get Started</p>
                
              </div>
            </Link>
          </div>
        </div>
        <div className=' lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
           <img src="https://i.ibb.co/X32v02P/6671.jpg" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;