import React from 'react';
import './index.css';
import web1 from '../src/images/pexels-michael-steinberg-342943.jpg'
import web2 from '../src/images/pexels-tim-samuel-5835268.jpg'
import web3 from '../src/images/pexels-expect-best-351264.jpg'

const UniversalBankInfo = () => {
  return (
    <div className="container">
      <div className="bank-info text-center">

        <p className="lead display-7 my-4">
          <strong>Our Mission:</strong> To provide financial solutions that empower individuals
          and businesses to achieve their goals.
        </p>
      </div>

      <div id="imageCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={web3}
              alt="Image 1"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={web1}
              alt="Image 2"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={web2}
              alt="Image 3"
              className="d-block w-100"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#imageCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#imageCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <div className="bank-description mt-4">
        <h5 className='my-4'>
          Universal Bank is a trusted financial institution committed to serving
          our community. With a legacy of excellence, we offer a wide range of
          banking and financial services to meet your needs. Whether you're
          saving for the future, financing a home, or managing your business
          finances, we're here to help you succeed.
        </h5>
        <h5 className='my-4'>
        <strong>Why Choose Universal Bank:</strong> We prioritize your financial
        well-being and offer competitive rates, easy-to-use online banking, and a
        team of experts ready to assist you. Whether you're planning for the future,
        buying a home, or expanding your business, Universal Bank is your partner in
        success.
      </h5>
      </div>

      <div className="contact-info mt-4 text-center">
        <p>

        </p>
      </div>
    </div>
  );
};

export default UniversalBankInfo;
