import React from 'react';
import aboutImg from '/images/us.jpg'

function AboutUs() {
  return (
    <div className='container mx-auto py-10'>
      <h1 className="text-3xl text-center mb-6 font-bold">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className='md:w-1/2 md:pl-8'>
          <img src={aboutImg} alt="Our Team" className="rounded-lg shadow-md" />
        </div>
        <div className='md:w-1/2 md:pr-8 px-4 text-justify'>
          <h2 className="text-2xl mb-4 font-semibold">Our Journey</h2>
          <p className="text-gray-700 ">
            Founded in 2019, Ping Communication has evolved from a small local startup to a leading player in the telecommunication industry. Our journey began with a simple vision: to provide seamless communication solutions that empower businesses and individuals alike.
          </p>
          <p className="text-gray-700  mt-4">
            Over the years, we've stayed true to our commitment, constantly innovating and adapting to the ever-changing landscape of technology. From pioneering new communication technologies to expanding our reach globally, we've remained dedicated to delivering exceptional services to our customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
