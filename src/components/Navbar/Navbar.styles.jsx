import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.div`
  background: transparent ;
  height: ${({ scrollNav }) => (scrollNav ? '-80px' : '80px')};
  display: flex;
  position: fixed;
  margin: 0;
  padding: 0;
  width: 120vw;
  // box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 0px 30px rgba(127, 137, 161, 0.25)' : '0')};
`

export const Hamburger = styled.div`
  color: #fff;
  display: none;
`

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  text-align: center;
  width: 90vw;
  justify-content: end;
  align-items: center;
  margin-right: 4rem;
`

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  margin-left: 4rem;
`

export const NavItem = styled.div`
  display: block;
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 16px;
  font-weight: bold;
`

export const NavLinks = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #fff;
`