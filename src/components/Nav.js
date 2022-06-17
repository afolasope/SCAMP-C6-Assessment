import React from 'react';
import styled from 'styled-components';
import { navLinks } from '../utils/helper';
import { openMenu } from '../assets';

const Nav = ({ setSidebarToggle }) => {
  return (
    <Wrapper>
      <div className="nav-btns">
        <img
          src={openMenu}
          alt="open nav"
          onClick={() => setSidebarToggle(true)}
        />
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
  @media (min-width: 64em) {
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
