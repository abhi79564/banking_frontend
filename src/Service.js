import './App.css';
import React from 'react';
import CustomerList from './CustomerList';
import Deposit from './Deposit';
import Withdrawal from './Withdrawl';
import Transacations from './Transactions';
import ChatbaseIntegration from './ChatbaseIntegration';
import web1 from '../src/images/pexels-maitree-rimthong-1602726.jpg'
import web2 from '../src/images/withdrawl - Copy - Copy.jpg'
import web3 from '../src/images/pexels-kampus-production-8353786.jpg'
import web4 from '../src/images/customers - Copy - Copy.jpg'
import web5 from '../src/images/loan - Copy - Copy.jpg'
import web6 from '../src/images/chatbot.jpg'
function Service() {
  return (
<div>
<div className='my-5'>
<h1 className='text-center'>Our Services</h1>
</div>
<div className="container-fluid mb-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-5">
<div className="col-md-4 col-10 mx-auto">

<div class="card">
  <img src={web1} class="card-img-top" alt="img"/>
  <div class="card-body">
    <h5 class="card-title font-weight-bold">Deposit</h5>
    <p class="card-text">Deposit your Money.</p>
    <a href="/Deposit" class="btn btn-primary">Click</a>
  </div>
</div>

</div>
<div className="col-md-4 col-10 mx-auto">

<div class="card">
  <img src={web2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Withdraw</h5>
    <p class="card-text">Withdraw your money</p>
    <a href="/Withdrawl" class="btn btn-primary">Click</a>
  </div>
</div>

</div>
<div className="col-md-4 col-10 mx-auto">

<div class="card">
  <img src={web3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Online</h5>
    <p class="card-text">UPI Payment</p>
    <a className="btn btn-primary" href="http://localhost:3010" target="_blank">Click</a>
    </div>
</div>

</div>
<div className="col-md-4 col-10 mx-auto">

<div class="card">
  <img src={web4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Transacations</h5>
    <p class="card-text">Transfer your Money.</p>
    <a href="/Transactions" class="btn btn-primary">Click</a>
  </div>
</div>

</div>
<div className="col-md-4 col-10 mx-auto">

<div class="card">
  <img src={web5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Loan</h5>
    <p class="card-text">Home Loan and Education Loan</p>
    <a href="#" class="btn btn-primary">Apply</a>
  </div>
</div>

</div>
<div className="col-md-4 col-10 mx-auto" style={{ width: '25rem',height: '30rem' }}>

<div class="card">
  <img src={web6} class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">FAQs</h5>
    <p class="card-text">Ask queries regarding loan and taxes</p>
    <a href="/ChatbaseIntegration" class="btn btn-primary">Click</a>
  </div>
</div>

</div>
</div>

</div>
</div>
</div>



</div>
   
   

  )
}

export default Service;
