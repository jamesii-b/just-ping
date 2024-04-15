import { worksData } from './workdata';
import { Link } from "react-router-dom";
import { useState } from 'react';

import { SlLocationPin } from "react-icons/sl";


const Works = () => {
    return (
        <div className="w-full  md:py-15 py-5 relative">
            <div className="w-11/12 mx-auto  ">
                <h1 className="text-center  text-4xl font-bold md:pb-8 py-3">Our Works</h1>
                <div className="flex   flex-col md:flex-row">
                    {worksData.map(item => (
                        <Items item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const Items = ({ item }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex-1 md:mr-10 mb-4 overflow-hidden relative max-h-1/3">
            <img
                src={item.img}
                className={`w-full h-full object-cover duration-150 ${hover ? 'scale-110 ' : ''}`}
                alt={item.title}
            />
            <div onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} className={` ${hover ? 'content-none bg-black bg-opacity-40' : ''} py-10 top-0 hidden left-0 w-full h-full  absolute md:flex items-center justify-end flex-col`}>
                <h1 className={`text-white text-2xl px-2 mb-1 ${hover ? 'block' : 'hidden'}`}>{item.title}</h1>
                <div className={`${hover ? 'flex' : 'hidden'}`}>
                    <SlLocationPin color='white' />

                    <p className={`text-white text-xl px-2 mb-1 ${hover ? 'block' : 'hidden'}`}>
                        {item.location}</p>
                </div>
            </div>
            <div className='text-center py-3'>
                <h1 className='text-lg'>{item.title}</h1>
                < div className='flex flex-row justify-center '>
                    <SlLocationPin color='black' />

                    <p >
                        {item.location}</p>
                </div>
            </div>
        </div>
    );
}

export default Works;
