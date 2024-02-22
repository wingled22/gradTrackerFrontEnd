import { Button, Input } from 'reactstrap';
import React from 'react';
import Bttons from './Bttons';

const Searchc = () => {
  return (
    <>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Input type='text' placeholder='Search Alumni' style={{ width: '600px', marginLeft:'-503px', marginTop: '131px' }} />

  <Bttons/>

  </div>

   
   
    </> 
  );
};

export default Searchc;
