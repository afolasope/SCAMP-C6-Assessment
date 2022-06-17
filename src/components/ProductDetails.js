import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';

const ProductDetails = () => {
  return (
    <Wrapper>
      <h5 className="title">FLOWER COMPANY</h5>
      <p className=" name bold">Fall Limited Rose Flowers</p>
      <p className="desc">
        Bolor sit amet consectetur, adipisicing elit. Quaerat adipisci pariatur
        dolorem hic dolore facere dolor, iure eveniet obcaecati! Saepe, rerum
        doloribus.
      </p>
      <div className="price">
        <div className="price-discount">
          <span className="bold">$125.00</span>
          <span className="discount">50%</span>
        </div>
        <span className="real-price">$250.00</span>
      </div>
      <AddToCart />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  flex-basis: 45%;

  .title {
    color: var(--pry-color);
  }
  .name {
    line-height: 1.3;
  }
  .bold {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    color: var(--very-dark-blue);
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price-discount {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .amount-btns {
    background-color: var(--light-grayish-blue);
    display: flex;
    justify-content: space-around;
    padding: 0.6rem;
    margin: 1rem 0;
    border-radius: var(--border-radius);

    .amount {
      font-weight: 600;
    }
    img {
      object-fit: contain;
    }
  }
  .real-price {
    text-decoration: line-through;
    color: var(--grayish-blue);
    font-weight: 600;
  }
  .discount {
    background-color: var(--accent-clr-2);
    padding: 0.3rem 0.5rem;
    color: var(--pry-color);
    border-radius: var(--border-radius);
  }

  @media (min-width: 64em) {
    .name {
      font-size: 2.5rem;
    }
    .desc {
      margin: 2rem 0;
    }
    .product-cta {
      .amount-btns {
        width: 35%;
      }
      button {
        width: 60%;
      }
    }
    .price {
      display: block;
      margin-bottom: 2rem;
      span:first-of-type {
        margin-right: 2rem;
      }
    }
    .price-discount {
      width: 20%;
    }
  }
`;

export default ProductDetails;
