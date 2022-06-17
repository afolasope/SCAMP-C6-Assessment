import React, { useState } from 'react';
import styled from 'styled-components';
import { plusBtn, minusBtn, cartIconWhite } from '../assets';

const AddToCart = () => {
  const [amount, setAmount] = useState(0);

  const toggleAmount = (value) => {
    if (value === 'inc') {
      setAmount((prev) => {
        return (prev = parseInt(prev) + 1);
      });
    } else if (value === 'dec') {
      setAmount((prev) => {
        if (prev < 1) {
          return (prev = 0);
        }
        return (prev = parseInt(prev) - 1);
      });
    }
  };

  return (
    <Wrapper>
      <div className="amount-btns">
        <img
          src={minusBtn}
          alt="increase cart items"
          className="dec-btn btn"
          onClick={() => toggleAmount('dec')}
        />
        <input
          type="number"
          className="amount"
          min={0}
          name="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <img
          src={plusBtn}
          alt="decrease cart items"
          className="inc-btn btn"
          onClick={() => toggleAmount('inc')}
        />
      </div>
      <button>
        <img src={cartIconWhite} alt="cart icon" className="cart-btn" />
        <span>Add To Cart</span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .amount-btns {
    background-color: var(--light-grayish-blue);
    display: flex;
    justify-content: space-around;
    padding: 0.6rem;
    margin: 1rem 0;
    border-radius: var(--border-radius);

    .amount {
      width: 3rem;
      padding: 0.3;
      font-size: inherit;
      text-align: center;
    }
    img {
      object-fit: contain;
    }
    .btn:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.6rem;
    border: none;
    background-color: var(--pry-color);
    border-radius: var(--border-radius);
    color: var(--white);
    font-weight: 600;
    box-shadow: -7px 3px 34px -9px rgba(0, 0, 0, 0.84);
  }
  button:hover {
    background-color: var(--accent-clr);
    transform: translateY(-5%);
  }

  @media (min-width: 37.5em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .amount-btns {
      width: 35%;
    }
    button {
      width: 60%;
    }
  }
`;

export default AddToCart;
