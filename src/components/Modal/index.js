import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  align-items: center;
  pointer-events: ${(props) => (props.isActive ? "all" : "none")};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  position: fixed;
  right: 0;
  top: 0;
  transition: all 300ms ease;
`;

const Overlay = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
  content: "";
  height: 100%;
  position: absolute;
  transition: all 300ms ease;
  width: 100%;
  z-index: -1;
`;

export default ({ children, isActive, setActive }) => {
  return (
    <Modal isActive={isActive}>
      <Overlay onClick={() => setActive(!isActive)} />
      {children}
    </Modal>
  );
};
