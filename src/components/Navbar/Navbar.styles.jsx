import { Link } from 'react-scroll';
import styled from 'styled-components';
// import media from '../../assets/Media';

export const NavBar = styled.div`
  background: rgba(30,30,30,0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 80px;
  opacity: ${({ scrollNav }) => (scrollNav ? '1' : '0')};
  display: flex;
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100vw;
  transition: all 0.2s ease-in-out;
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

export const NavLogo = styled.h1`
  display: block;
  color: #fff;
  cursor: pointer;
  margin-left: 4rem;
  margin-top: 1.5rem;
  letter-spacing: 4px;
`

export const NavItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #fff;

  &:hover{
    color: #46caca;
  }
`