import React from 'react';
import styled from 'styled-components';
import { closeMenu } from '../assets';
import { navLinks } from '../utils/helper';
const Sidebar = ({ setSidebarToggle, sidebarToggle }) => {
  return (
    <Wrapper>
      <aside
        className={`${sidebarToggle ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <img
          src={closeMenu}
          alt="close sidebar icon"
          onClick={() => {
            setSidebarToggle(false);
            console.log(sidebarToggle);
          }}
        />
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
  .sidebar {
    position: fixed;
    top: 0;
    width: 0;
    height: 100vh;
    background-color: var(--white);
    transform: translateX(-100%);
    transition: all 0.3s ease;
    z-index: 0;
    opacity: 0;
  }
  .show-sidebar {
    width: 60%;
    transform: translate(0);
    z-index: 10;
    padding: 1.5rem;
    opacity: 1;
  }
  .nav-links {
    padding: 2rem 0;
  }
  .nav-link {
    margin-bottom: 1.5rem;
  }
  .nav-link a {
    color: var(--very-dark-blue);
    font-weight: 600;
    padding: 0.6rem;
    width: 100%;
    display: block;
  }
  .nav-link a:hover {
    color: var(--white);
    background-color: var(--grayish-blue);
  }
  @media (min-width: 64em) {
    display: none;
  }
`;
export default Sidebar;
