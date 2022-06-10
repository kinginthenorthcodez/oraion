import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, [closeModal]);
  return (
    <>
      <p> {modalContent}</p>
    </>
  );
};

export default Modal;
