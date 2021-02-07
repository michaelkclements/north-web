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
      contentfulPage(id: { eq: "9dd16838-0fa9-556b-878a-718fb249965a" }) {
        vimeoUrl
        backgroundVid {
          file {
            url
          }
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
            src={data.contentfulPage.vimeoUrl}
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
      <Vidja
        autoPlay
        muted
        loop
        src={data.contentfulPage.backgroundVid.file.url}
      />
    </Main>
  );
};

export default IndexPage;
