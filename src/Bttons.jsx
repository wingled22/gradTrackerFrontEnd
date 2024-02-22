import React from 'react';
import { Button } from 'reactstrap';
import PersonalInfoModal from './PersonalInfoModal';

const Bttons = () => {
  return (
    <>
      <PersonalInfoModal />
      <div style={{ display: 'flex', position: 'relative', right: '-515px', bottom: '64px' }}>
       <Button color='danger'>Delete</Button>
      </div>

    </>
  );
}

export default Bttons;
