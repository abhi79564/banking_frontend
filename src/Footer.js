import React from "react";
import { Link } from "react-router-dom";
import { MdFacebook, MdLocalPhone, MdMail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
  return (
    <footer className="text-success bg-light mt-4">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h5 fw-bold text-decoration-underline mb-3">Address</h1>
            <p className="text-muted">Street-12,Carter Road</p>
            <p className="text-muted">Bandra(W)</p>
            <p className="text-muted">Mumbai.</p>
            <p className="text-muted">220567</p>
          </div>
          <div className="col-md-6">
          <a className="h5 fw-bold text-decoration-underline mb-3" href="http://localhost:3001" target="_blank">Contact Us</a>
            <p className="text-muted">
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:9321892495" className="text-decoration-none"></a>
            </p>
            <p className="text-muted">
              <MdMail className="bi bi-envelope-fill me-2"></MdMail>
              <a href="mailto:abhijeet21104@gmail.com" className="text-decoration-none">EMAIL</a>
            </p>
            <p className="text-muted">
              <MdFacebook className="bi bi-facebook me-2"></MdFacebook>
              <a href="#" className="text-decoration-none">FACEBOOK PAGE</a>
            </p>
            <p className="text-muted">
              <GrInstagram className="bi bi-instagram me-2"></GrInstagram>
              <a href="#" className="text-decoration-none">INSTAGRAM PAGE</a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-2 text-muted">
        UNIVERSAL BANK &copy; 2023 - ABHI | Terms & Condition
      </div>
    </footer>
  );
};

export default Footer;
