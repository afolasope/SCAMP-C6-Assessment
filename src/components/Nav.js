import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global_context';
import { navLinks } from '../utils/helper';
import { closeMenu, openMenu } from '../assets';

const Nav = () => {
  const { toggleNav, is_sidebar_open } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-btns">
        {is_sidebar_open ? (
          <img
            className="close-nav"
            src={closeMenu}
            alt="close nav"
            onClick={toggleNav}
          />
        ) : (
          <img src={openMenu} alt="open nav" onClick={toggleNav} />
        )}
      </div>
      <ul className="nav-items">
        {navLinks.map(({ id, name, link }) => {
          return (
            <li key={id}>
              <a href={link}> {name}</a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  flex-basis: 70%;
  .nav-items {
    display: none;
    li::after {
      content: '';
      display: block;
      top: 0%;
      width: 0;
      height: 4px;
      background: var(--pry-color);
      transform: translateY(2.3rem);
      transition: width 0.3s;
    }
    li:hover::after {
      width: 100%;
    }

    li a {
      color: var(--dark-grayish-blue);
    }
    li a:hover {
      font-weight: 500;
      color: var(----very-dark-blue);
    }
  }
  @media (min-width: 1024px) {
    .nav-items {
      display: flex;
      justify-content: space-around;
    }
    .nav-btns {
      display: none;
    }
  }
`;

export default Nav;
