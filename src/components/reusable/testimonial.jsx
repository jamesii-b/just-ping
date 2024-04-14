import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import img01 from "../../assets/testimonials/01.png";
import img02 from "../../assets/testimonials/02.png";
import img03 from "../../assets/testimonials/03.png";

const images = [img01, img02, img03];

function Testimonial() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative mb-20 mt-10">
      <div className="w-full h-96 relative overflow-hidden">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={index === currentImage}
            enter="transition-opacity duration-1000 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full object-cover transition-opacity"
            />
          </Transition>
        ))}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="h-6 w-6 text-gray-800"
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="h-6 w-6 text-gray-800"
          />
        </button>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
