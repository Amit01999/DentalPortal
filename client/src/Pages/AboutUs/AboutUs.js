import React from 'react';
import docimg1 from '../../assets/images/doctor-img01.png';
import docimg2 from '../../assets/images/doctor-img02.png';
import docimg3 from '../../assets/images/doctor-img03.png';
import clinic from '../../assets/images/dental-clinic-interior-design.jpg';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src={clinic}
              alt="Dental Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold text-secondary mb-4">
              Welcome to Our Dental Care Center
            </h2>
            <p className="text-gray-700 mb-4">
              At SmileBright Dental Care, we believe in providing our patients
              with a welcoming and comfortable environment. Our dedicated team
              of professionals uses state-of-the-art equipment and innovative
              techniques to ensure you receive the best dental care possible.
            </p>
            <p className="text-gray-700 mb-4">
              We offer a wide range of services, from regular cleanings and
              exams to more advanced treatments like dental implants, veneers,
              and orthodontics. Whether you're looking for routine care or a
              complete smile makeover, we're here to help you achieve your best
              smile.
            </p>
            <p className="text-gray-700">
              Our friendly staff is committed to providing personalized,
              compassionate care for every patient. We look forward to welcoming
              you and helping you maintain a lifetime of beautiful, healthy
              smiles!
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Team Member */}
            <div className="text-center">
              <img
                src={docimg1}
                alt="Dr. John Doe"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary">
                Dr. John Doe
              </h3>
              <p className="text-gray-500">Chief Dentist</p>
            </div>

            <div className="text-center">
              <img
                src={docimg3}
                alt="Dr. Jane Smith"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary">
                Dr. Jane Smith
              </h3>
              <p className="text-gray-500">Orthodontist</p>
            </div>

            <div className="text-center">
              <img
                src={docimg2}
                alt="Dr. Emily Johnson"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary">
                Dr. Emily Johnson
              </h3>
              <p className="text-gray-500">Pediatric Dentist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Brighten Your Smile?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us today to schedule your appointment and experience the
            best in dental care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
