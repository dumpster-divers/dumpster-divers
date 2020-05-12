import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root');

function IncorrectBin() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return(
    <div className="yellow-part-game">
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
    style={{
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0)'
      },
      content: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        right: '40%',
        bottom: '40%',
        background: 'rgba(97, 74, 52, 0.5)',
        borderRadius: '40px',
        border: '0pt'
      }

    }}
    >
      <h2>Oops</h2>
      <p>this is the wrong bin</p>

    </Modal>
    </div>
  );
}

export default IncorrectBin;
