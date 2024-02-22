import React from 'react';
import { Button } from 'reactstrap';
import PersonalInfoModal from './PersonalInfoModal';

const Bttons = () => {
  return (
    <>
      <PersonalInfoModal />
      <Button color='danger' style={{ marginLeft: '1110px',marginTop:'-113px' }}>Delete</Button>

      
    </>
  );
}

export default Bttons;
