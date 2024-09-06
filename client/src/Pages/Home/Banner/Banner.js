import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-4xl font-bold font-Roboto text-accent">
            Achieve Your Brightest Smile with Expert Dental Care.
          </h1>
          <p className="py-6">
            Experience top-quality dental care in a comfortable and friendly
            environment. From routine cleanings to advanced treatments, we're
            dedicated to helping you achieve a healthy, radiant smile.
          </p>
          <Link to="/appointment">
            <PrimaryButton>Make an appointment</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
