import React from 'react';
import styled from 'styled-components';
import { cartIcon } from '../assets';

const Cart = () => {
  return (
    <Wrapper>
      <img src={cartIcon} alt="cart" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img:hover {
    cursor: pointer;
  }
`;

export default Cart;
