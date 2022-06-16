import React from 'react';
import styled from 'styled-components';
import {
  Cart,
  Nav,
  Photos,
  Logo,
  Overlay,
  Sidebar,
  ProductDetails,
} from './components';
import avatar from './assets/image-avatar.png';
import { useGlobalContext } from './context/global_context';

const Page = () => {
  const { nav_is_open } = useGlobalContext();
  return (
    <Wrapper>
      <header>
        <div className="nav-logo">
          <Nav />
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
        {nav_is_open && <Overlay />}
        {nav_is_open && <Sidebar />}
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
    gap: 0.5rem;
    justify-content: space-between;
    width: 11rem;
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
      img {
        height: 100%;
        width: 100%;
      }
    }
    .avatar:hover {
      border: 2px solid var(--pry-color);
      border-radius: 50%;
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
