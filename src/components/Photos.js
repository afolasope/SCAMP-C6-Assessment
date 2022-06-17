import React, { useState } from 'react';
import styled from 'styled-components';
import { productPhotos as products } from '../utils/helper';
import SlideBtns from './SlideBtns';

const Photos = () => {
  const [main, setMain] = useState(0);

  return (
    <Wrapper>
      <div className="main-image">
        <img src={products[main].image} alt={products[main].alt} />
      </div>
      <div className="gallery">
        {products.map((item, index) => {
          return (
            <img
              className={index === main ? 'gallery-img active' : 'gallery-img'}
              src={item.thumbnail}
              alt=""
              key={index}
              onClick={() => setMain(index)}
            />
          );
        })}
      </div>
      <SlideBtns main={main} setMain={setMain} products={products} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  z-index: 1;
  flex-basis: 45%;
  .main-image {
    display: block;
    height: 30rem;
    width: auto;
    object-fit: cover;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .gallery {
    display: none;
    .gallery-img {
      transform: scale(1);
      transition: transform 0.3s ease-in;
    }
    .gallery-img:hover {
      border: 3px solid var(--pry-color);
      opacity: 0.5;
      transform: scale(1.1);
      cursor: pointer;
    }
    .active {
      border: 3px solid var(--pry-color);
      opacity: 0.5;
    }
  }

  @media (min-width: 64em) {
    .main-image {
      height: 30rem;
      img {
        border-radius: var(--border-radius);
      }
    }

    .gallery {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      img {
        height: 5rem;
        width: 5rem;
        border-radius: var(--border-radius);
      }
    }
  }
`;

export default Photos;
