import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import ButtonComponent from "../Button/ButtonComponent";
import styles from "./Modal.module.css";

export default function ModalComponent({ isOpen, children, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      width: "100%",
      maxWidth: "572px",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      height: "fit-content",
      maxHeight: "90vh",
      background: "rgba(239, 239, 239, 0.85)",
      border: "0",
      borderRadius: "15px",
      padding: "2rem",
      marginRight: "50%",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
    },
  };
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
      >
        {children}
      </ReactModal>
    </div>
  );
}
