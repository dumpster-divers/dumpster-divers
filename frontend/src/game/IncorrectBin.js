import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root');

function IncorrectBin() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return(
    <div>
    <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
    style={{
      overlay: {
        position: 'fixed',
        top: '9.8%',
        bottom: '9.5%',
        right: '16.7%',
        left: '16.7%',
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      },
      content: {
        position: 'absolute',
        width: 500,
        height: 350,
        left:'50%',

        background: 'rgba(97, 74, 52, 0.5)',
        borderRadius: '40px',
        border: '0pt'
      }

    }}
    >
      <CrossSVG className="modal-graphic"/>
      <h1 className="modal-h1">Oops</h1>
      <p className="modal-p">this is the wrong bin</p>



    </Modal>
    </div>
  );
}


var CrossSVG = function(){
  return(
    <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="86.5688" y="13.7366" width="103" height="19.4265" rx="7" transform="rotate(135 86.5688 13.7366)" fill="#EB3B3B"/>
      <rect x="86.5688" y="13.7366" width="103" height="19.4265" rx="7" transform="rotate(135 86.5688 13.7366)" fill="#C55252"/>
      <rect x="13.7368" width="103" height="19.4265" rx="7" transform="rotate(45 13.7368 0)" fill="#EB3B3B"/>
      <rect x="13.7368" width="103" height="19.4265" rx="7" transform="rotate(45 13.7368 0)" fill="#C55252"/>
    </svg>


  );
}

export default IncorrectBin;
