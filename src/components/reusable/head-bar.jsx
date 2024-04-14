import React, { useState } from 'react';

function HeadBar({ imageSrc, backgroundColor, title }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <div className="relative" style={{ minHeight: '50vh' }}>
            {/* Placeholder with pink background */}
            <div
                className="absolute w-full h-full"
                style={{
                    background: "linear-gradient(135deg, #ffd3b6, #d9a7c7)",
                    opacity: imageLoaded ? 0 : 1,
                    transition: 'opacity 0.5s ease',
                }}
            ></div>

            {/* Content */}
            <div
                className={`absolute h-16 md:h-20 z-10 inset-x-0 -bottom-16 md:-bottom-10 w-1/2 md:w-1/5 m-10 p-1 bg-blue-500 bg-opacity-20 text-center text-white py-2 md:py-4 text-lg md:text-3xl font-body font-bold `}
                style={{ visibility: 'visible' }}
            >
                <span className="hidden md:inline">{title}</span>
                <span className="md:hidden text-xl sm:text-2xl">
                    {title.split(' ')[0]}
                </span>
            </div>

            {/* Blackish overlay */}
            <div
                className="absolute w-full h-full bg-black "
                style={{ opacity: imageLoaded ? 0.2 : 0 }}
            ></div>

            {/* Actual image */}
            <img
                src={imageSrc}
                style={{
                    minHeight: '50vh',
                    maxHeight: '50vh',
                    objectFit: 'cover',
                    opacity: imageLoaded ? 1 : 0
                }}
                className="w-full h-full object-cover sm:min-h-30vh sm:max-h-30vh"
                alt=""
                onLoad={handleImageLoaded}
                onError={handleImageLoaded} // Fallback for image loading errors
                loading="lazy" // Lazy loading enabled
            />
        </div>
    );
}

export default HeadBar;
