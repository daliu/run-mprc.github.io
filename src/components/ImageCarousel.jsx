import React from "react";

const ImageCarousel = ({ images }) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden my-4 w-full">
      {images.map((imageSrc, index) => (
        <div key={index} className="w-full aspect-w-16 aspect-h-9 overflow-hidden mb-4 md:mb-0">
          <img src={imageSrc} className="object-cover object-center w-full h-64 md:mx-10" alt={`carousel ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;