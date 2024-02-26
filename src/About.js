import './App.css';
import React from 'react';
import Common from './Common';
import Register from './Register';
import UniversalBankInfo from './UniversalBankInfo';

import web from '../src/images/pexels-habib-904735.jpg';
function About() {
  return (
<div>


<Common name='Welcome to About Page' imgsrc={web} visit='/UniversalBankInfo' btname='Read More'/>

</div>
   
   

  )
}

export default About;
