import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import FaqList from '../../../components/Faq/FaqList';

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <FaqList></FaqList>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
