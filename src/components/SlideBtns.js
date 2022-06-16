import React from 'react';
import styled from 'styled-components';
import { nextBtn, previousBtn } from '../assets';

const SlideBtns = ({ setMain, products }) => {
  const handleSlide = (value) => {
    if (value === 'next') {
      setMain((prev) => {
        if (prev === products.length - 1) {
          return (prev = 0);
        }
        return (prev += 1);
      });
    }
    if (value === 'prev') {
      setMain((prev) => {
        if (prev < 1) {
          return (prev = products.length - 1);
        }
        return (prev -= 1);
      });
    }
  };

  return (
    <Wrapper className="slider-btns">
      <img
        src={nextBtn}
        alt="next"
        className="next-btn"
        onClick={() => handleSlide('next')}
      />
      <img
        src={previousBtn}
        alt="previous"
        className="prev-btn"
        onClick={() => handleSlide('prev')}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .next-btn,
  .prev-btn {
    top: 50%;
    background-color: var(--white);
    padding: 1rem;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .next-btn {
    position: absolute;
    right: 2%;
  }
  .prev-btn {
    position: absolute;
    left: 2%;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export default SlideBtns;
