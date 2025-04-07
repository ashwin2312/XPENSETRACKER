// import React from "react";
import styled from "styled-components";
// import styles from "./Button.module.css";

export default function ButtonComponent({ btnTitle, btnColor, handleClick }) {
  const Button = styled.button`
    width: 167.65px;
    height: 38px;
    gap: 0px;
    border-radius: 15px;
    opacity: 0px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.38px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ffffff;
    background-color: ${btnColor};
    border: none;
  `;
  return (
    <div>
      <Button onClick={handleClick}>{btnTitle}</Button>
    </div>
  );
}
