import React from 'react';
import styled from 'styled-components';

const Overlay = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;
  background-color: var(--black-lighthouse);

  @media (min-width: 64em) {
    display: none;
  }
`;

export default Overlay;
