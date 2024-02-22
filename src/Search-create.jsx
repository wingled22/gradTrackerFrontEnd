import { Button, Input } from 'reactstrap';
import React from 'react';
import Bttons from './Bttons';

const Searchc = () => {
  return (
    <>
    
      <Input type='text' placeholder='Search Alumni' style={{ width: '600px', marginLeft: '70px', marginTop: '120px' }} />
   
    <Bttons/>
   
    </> 
  );
};

export default Searchc;
