import React, { useState } from 'react';

// libraries
import Modal from 'react-bootstrap/Modal';

const Modals = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Modal
      </button>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
          <button className="btn btn-primary" onClick={() => setShow2(true)}>
            Modal
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShow(false)}>
            Close
          </button>
          <button className="btn btn-primary" onClick={() => setShow(false)}>
            Save
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show2}
        backdrop="static"
        keyboard={false}
        onHide={() => setShow2(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShow2(false)}>
            Close
          </button>
          <button className="btn btn-primary" onClick={() => setShow2(false)}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
