import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Logo = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Porter;
  font-size: 100px;
  font-weight: bold;
  margin: 0;

  div {
    margin: ${(props) => (props.isActive ? "0 10px" : "0")};
    transition: all 500ms ease 500ms;

    span {
      font-size: 75px;
      font-weight: normal;
      letter-spacing: ${(props) => (props.isActive ? "0" : "-60px")};
      opacity: ${(props) => (props.isActive ? "1" : "0")};
      transition: all 500ms ease 500ms;
    }
  }

  @media (min-width: 960px) {
    flex-direction: row;
    font-size: 120px;

    div {
      span {
        font-size: 100px;
        letter-spacing: ${(props) => (props.isActive ? "0" : "-80px")};
      }
    }
  }
`;

export default () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 1);
  }, []);

  return (
    <Logo isActive={isActive}>
      <div>
        G<span>eorge</span>
      </div>
      <div>
        N<span>orth</span>
      </div>
    </Logo>
  );
};
