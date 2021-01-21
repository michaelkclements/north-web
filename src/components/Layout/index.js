import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    overflow: hidden;
  }

  #gatsby-focus-wrapper {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
`;

const Container = styled.div`
  background-color: #202020;
  display: flex;
  flex: 1;
`;

export default ({ children }) => (
  <>
    <Helmet />
    <GlobalStyle />
    <Container>{children}</Container>
  </>
);
