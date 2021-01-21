import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 24px;
  padding: 10px 20px;
  margin: 10px;
`;

export default ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
