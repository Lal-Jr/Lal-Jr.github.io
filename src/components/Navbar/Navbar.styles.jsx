import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  background: #0a192f ;
  height: ${({ scrollNav }) => (scrollNav ? '-80px' : '80px' )};
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  z-index: 997;
  transition: all 0.5s;
  padding: 0px 20px 0px 20px;
  text-decoration: none;
  width: 100vw;
  box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 0px 30px rgba(127, 137, 161, 0.25)' : '0')};
`;

export const Hamburger = styled.div`
    display: none;
    // display: block;
    // position: fixed;
    // padding-top: 5px;
    // top: 0;
    // right: 0;
    // transform: translate(-100%, 60%);
    // font-size: 1.8rem;
    // cursor: pointer;
    // color: #fff;
      

    @media screen and (max-width: 900px) {
      Hamburger {
        display: block;
        position: fixed;
        padding-top: 5px;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
      }
    }
`;

export const NavLogo = styled.div`
  margin-left: 4rem;
  max-height: 26px;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 900px) {
    navLogo {
      margin-left: 0px;
    }
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 10px;
  text-align: center;
  width: 90vw;
  justify-content: end;
  align-items: center;
  margin-right: 4rem;

  @media screen and (max-width: 900px) {
    navMenu {
        display: none;
    }
  }
`;

export const NavItem = styled.div`
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 14px;
  font-weight: bold;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #fff;

  &:hover {
  color: #007bff;
  transition: all 0.2s ease-out;
  }
`;