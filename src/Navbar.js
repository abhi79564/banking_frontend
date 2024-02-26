import React from "react";
import './App.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import prisonEdLogo from './images/Webd.avif';

const Navbar=()=>{
    return(
<div>
<div class="container-fluid nav bg">
  <div class="row">
    <div class="col-10 mx-auto">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <div class="d-flex justify-content-between align-items-center ">
  
  <a className="navbar-brand col-6 mx-2" href="/">
  <img src={prisonEdLogo} alt="PrisonEd Logo" className="logo mx-1" /><strong className="mx-4">Universal Bank</strong>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto row-1 col-1 my-6 mx-6 my-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/service">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/register">Connect</a>
        </li>

      </ul>
    </div>
  </div>
</div>

      </nav>
    </div>
  </div>
</div>


</div>
    );
};

export default Navbar;