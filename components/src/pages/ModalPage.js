import React from 'react';
import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
  const [showModal, setShowModal]= useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div>
    <Button onClick={handleClose} primary>I Accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept.
    </p>
  </Modal>

  return (
    <div className='relative'>
      <Button onClick={handleClick} onClose={handleClose} primary>Open Model</Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage