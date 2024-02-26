import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'
import About from './About'
import Service from './Service'
import Register from './Register'
import Navbar from './Navbar';
import Footer from './Footer';
import Deposit from './Deposit';
import Withdrawal from './Withdrawl';
import YourComponent from './YourComponent';
import {Switch,Route,Redirect} from 'react-router-dom'
import Transacations from './Transactions';
import ChatbaseIntegration from './ChatbaseIntegration';
import UniversalBankInfo from './UniversalBankInfo';
import Chatbot from './Chatbot';

function App() {
  return (
<div>
<Navbar />
<Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/deposit" component={Deposit}/>
    <Route exact path="/withdrawl" component={Withdrawal}/>
    <Route exact path="/YourComponent" component={YourComponent}/>
    <Route exact path="/transactions" component={Transacations}/>
    <Route exact path="/ChatbaseIntegration" component={ChatbaseIntegration}/>
    <Route exact path="/UniversalBankInfo" component={UniversalBankInfo}/>
    <Route exact path="/Chatbot" component={Chatbot}/>


    <Redirect to='/'/>
</Switch>
<Chatbot/>

<Footer/>
</div>
   
   

  )
}

export default App;
