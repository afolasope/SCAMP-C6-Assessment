import React, { useState } from 'react';
import styled from 'styled-components';
import { avatar } from './assets';
import {
  Cart,
  Nav,
  Photos,
  Logo,
  Overlay,
  Sidebar,
  ProductDetails,
} from './components';

const Page = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Wrapper>
      <header>
        <div className="nav-logo">
          <Nav
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
          />
          <Logo />
        </div>
        <div className="cart-user">
          <Cart />
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
      <main className="main">
        {sidebarToggle && <Overlay />}
        <Sidebar
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
        />
        <Photos />
        <ProductDetails />
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    @media (min-width: 1024px) {
      margin: 2rem 3rem;
      padding: 0 0 2rem 0;
      border-bottom: 1px solid var(--dark-grayish-blue);
    }
    @media (min-width: 1400px) {
      margin: 0rem 2rem;
    }
  }

  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6.5rem;
    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      flex-basis: 65%;
    }
  }
  .cart-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 5rem;
    @media (min-width: 1024px) {
      flex-basis: 8%;
    }

    .avatar {
      height: 2rem;
      width: 2rem;
      transition: transform 0.3s ease;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .avatar:hover {
      border: 2px solid var(--pry-color);
      transform: scale(1.2);
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .main {
    position: relative;
  }
  @media (min-width: 1024px) {
    .main {
      padding: 0rem 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (min-width: 1400px) {
    padding: 2rem 10rem;
    .main {
      padding: 2rem 4rem;
    }
  }
`;

export default Page;
