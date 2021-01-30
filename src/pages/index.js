import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Logo, Button, Form, Modal } from "../components";

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
      <Modal
        isActive={isFormActive || isVideoActive}
        setActive={() => {
          setFormActive(false);
          setVideoActive(false);
        }}
      >
        {isVideoActive && (
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/147170777"
            width="640"
            height="360"
            frameBorder="0"
            allowfullscreen
          />
        )}
        {isFormActive && (
          <Form
            isActive={isFormActive}
            submitted={() => setFormActive(false)}
          />
        )}
      </Modal>
      <Vidja autoPlay muted loop src={data.contentfulAsset.file.url} />
    </Main>
  );
};

export default IndexPage;
