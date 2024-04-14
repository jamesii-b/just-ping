import React from 'react';

function OurWorks() {
  return (
    <div>
      <div className="container mx-auto max-w-screen-md py-10">
        <h1 className='text-center text-4xl font-bold md:py-5'>What we Offer?</h1>
        <div className="grid md:grid-cols-1 space-y-5 gap-8">
          {/* CCTV Installation Box */}
          <div className="flex  flex-col md:flex-row">
            <ServiceBox
              title="CCTV Installation"
              description="Secure your estate with our High Quality Camera powered by Licensed Retailor"
              sub_description="Our CCTV installations provide peace of mind through high-quality camera technology and professional setup, ensuring your property's security needs are met."
              color=""
            />
            <div className="w-0 md:w-8"></div>
            <img src='/images/cctv.png' className="max-h-96 mx-auto w-fit md:h-auto md:max-h-96 md:w-auto" alt="" />
          </div>
          {/* Intercom Installation Box */}
          <div className="flex  flex-col md:flex-row">
            <img src='/images/intercom.png' className="max-h-96 mx-auto w-fit md:h-auto md:max-h-96 md:w-auto" alt="" />
            <div className="w-0 md:w-8"></div>
            <ServiceBox
              title="Intercom Installation"
              description="Streamline communication and enhance security with our expert intercom installations."
              sub_description="Our meticulous attention to detail ensures that every aspect of the user journey is thoughtfully considered and optimized for maximum usability and engagement."
              color=""
            />
          </div>
          {/* TV & Antenna Mount Box */}
          <div className="flex  flex-col md:flex-row">
            <ServiceBox
              title="TV & Antenna Mount"
              description="Enjoy seamless entertainment with our professional TV and antenna mounting services."
              sub_description="We offer secure and aesthetically pleasing mounting solutions for TVs and antennas, ensuring a clutter-free and immersive viewing experience."
              color=""
            />
            <div className="w-0 md:w-8"></div>
            <img src='/images/tv.png' className="max-h-96 mx-auto w-fit md:h-auto md:max-h-96 md:w-auto" alt="" />
          </div>
          {/* Datapoint Installation Box */}
          <div className="flex  flex-col md:flex-row">
            <img src='/images/datapoint.png' className="max-h-96 mx-auto w-fit md:h-auto md:max-h-96 md:w-auto" alt="" />
            <div className="w-0 md:w-8"></div>
            <ServiceBox
              title="Datapoint Installation"
              description="Optimize your network infrastructure with our reliable datapoint installations."
              sub_description="We provide efficient and secure datapoint installations to enhance connectivity and support your digital needs."
              color=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceBox = ({ title, description, sub_description, color, icon, path }) => {
  return (
    <div className={`rounded-lg p-4 md:p-6  w-full md:w-auto ${color} hover:shadow-lg transition duration-300 transform hover:scale-105`}>
      <div className="flex items-center mb-4">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <p className="text-xl md:text-xl text-gray-700 mb-4">{description}</p>
        <p className="text-xl md:text-xl text-gray-700 mb-4">{sub_description}</p>
        <div className="text-center md:text-left"></div>
      </div>
    </div>
  );
};

export default OurWorks;
