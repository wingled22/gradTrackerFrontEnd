import React, { useState } from 'react';

const AddEmployementHistory = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveEmploymentHistory = () => {
    handleCloseModal(); 
  };

  return (
    <>
      <button onClick={handleOpenModal}>Add Employment History</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {/* Add your form or input fields for employment history here */}
            <button onClick={handleSaveEmploymentHistory}>Save</button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddEmployementHistory;
