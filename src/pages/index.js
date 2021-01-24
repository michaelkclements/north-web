import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Logo, Button } from "../components";

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
          <Button onClick={() => console.log("video")}>View video reel</Button>
          <Button onClick={() => console.log("contact")}>Contact me</Button>
        </Buttons>
      </Content>
      <Vidja autoPlay muted loop src={data.contentfulAsset.file.url} />
    </Main>
  );
};

export default IndexPage;
