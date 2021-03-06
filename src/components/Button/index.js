import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px;

  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

export default ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
