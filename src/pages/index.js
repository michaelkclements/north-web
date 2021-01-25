import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Logo, Button, Form } from "../components";

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 0;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Vidja = styled.video`
  height: 100vh;
  opacity: 0.3;
  position: absolute;
  z-index: -1;
`;

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

  &::before {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.3);
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

// markup
const IndexPage = () => {
  const [isFormActive, setFormActive] = useState(false);
  const [isVideoActive, setVideoActive] = useState(false);

  const data = useStaticQuery(graphql`
    {
      contentfulAsset(contentful_id: { eq: "4D5zQ1GTzkjHVqIguGEk5n" }) {
        file {
          url
        }
      }
    }
  `);

  return (
    <Main>
      <Content>
        <Logo />
        <Buttons>
          <Button onClick={() => setVideoActive(true)}>View video reel</Button>
          <Button onClick={() => setFormActive(true)}>Contact me</Button>
        </Buttons>
      </Content>
      <Modal isActive={isFormActive || isVideoActive}>
        {isVideoActive}
        <Form isActive={isFormActive} />
      </Modal>
      <Vidja autoPlay muted loop src={data.contentfulAsset.file.url} />
    </Main>
  );
};

export default IndexPage;
