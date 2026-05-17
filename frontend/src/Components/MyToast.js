import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function MyToast({ show, message, type }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast show={show} bg={type === "danger" ? "danger" : "success"}>
        <Toast.Body className="text-white">
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MyToast;