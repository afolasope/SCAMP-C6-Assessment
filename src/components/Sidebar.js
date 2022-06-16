import React from 'react';
import styled from 'styled-components';
import { closeMenu } from '../assets';
import { useGlobalContext } from '../context/global_context';
import { navLinks } from '../utils/helper';
const Sidebar = () => {
  const { nav_is_open, toggleNav } = useGlobalContext();

  return (
    <Wrapper>
      <aside className={`${nav_is_open ? 'aside show' : 'aside'}`}>
        <img src={closeMenu} alt="" onClick={() => toggleNav(!nav_is_open)} />
        <ul className="nav-links">
          {navLinks.map(({ id, name, link }) => {
            return (
              <li key={id} className="nav-link">
                <a href={link}> {name}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .aside {
    top: 0;
    position: fixed;
    height: 100vh;
    width: 0%;
    z-index: -1;
    transition: all 3s linear;
    transform: translateX(-50%);
    background-color: fuchsia;
  }
  .show {
    transform: translateX(0%);
    width: 100%;
    z-index: 10;
  }
  .nav-links {
    padding: 2rem 0;
  }
  .nav-link {
    margin-bottom: 1rem;
  }
  .nav-link a {
    color: var(--very-dark-blue);
    font-weight: 600;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export default Sidebar;
