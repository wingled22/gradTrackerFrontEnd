import { Button, Input } from 'reactstrap';
import React from 'react';
import Bttons from './Bttons';

const Searchc = () => {
  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Input type='text' placeholder='Search Alumni' style={{ width: '450px', marginRight: '280px', marginTop: '-320px' }} />
    </div>
    <Bttons/>
   
    </>
  );
};

export default Searchc;
