import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Card.module.css";
import ButtonComponent from "../Button/ButtonComponent";
import ModalComponent from "../Modal/ModalComponent";

export default function CardComponent({
  cardTitle,
  btnTitle,
  btnColor,
  amount,
  amountColor,
  handleClick
}) {
  // const [isVisible, setIsVisible] = useState(false);
  const Text = styled.span`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 34.47px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${amountColor};
  `;
  return (
    <div className={styles.layout}>
      <p>
        {cardTitle} <Text>₹{amount}</Text>{" "}
      </p>
      <ButtonComponent
        btnTitle={btnTitle}
        btnColor={btnColor}
        handleClick={handleClick}
      />
      {/* <ModalComponent visibility={isVisible} /> */}
    </div>
  );
}
