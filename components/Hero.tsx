'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or rent a car — Quickly & Easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental expreience with our with effortless booking
          service.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero image"
            className="object-contain"
            fill
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};
export default Hero;