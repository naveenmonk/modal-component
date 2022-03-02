import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from './content';

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>Dialog</h3>
        <button
          className="close-modal-btn"
          onClick={() => toggleModal(isModalOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;