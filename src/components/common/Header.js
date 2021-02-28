import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { Toggle } from './Toggle';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${(props) => props.theme.primaryColor}, ${(props) => props.theme.secondaryColor});
`;

const Menu = styled.nav`
  display: ${props => props.open ? 'block' : 'none'};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.bodyBackgroundColor};

  @media(min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return (
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: ${p => p.theme.bodyFontColor};;
  font-weight: ${props => props.isActive ? '700' : '400'};
`;

const MobileMenuIcon = styled.button`
  display: block;
  right: 0;
  position: absolute;
  top: 50%;
  width: 45px;
  transform: translate(-50%,-50%);
  background-color: transparent;
  border-width: 0px;

  &:before,
  &:after {
    background-color: ${p => p.theme.bodyFontColor};
    content: '';
    display: block;
    height: 4px;
    transition: all 200ms ease-in-out;
  }
  &:before {
    box-shadow: 0 10px 0 ${p => p.theme.bodyFontColor};
    margin-bottom: 16px;
  }
  &.open:before {
    box-shadow: 0 0 0 ${p => p.theme.bodyFontColor};
    transform: translateY(10px) rotate(45deg);
  }
  &.open:after{
    transform: translateY(-10px) rotate(-45deg);
  }

  @media(min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  width: 25px;
  height: 25px;
  display: block;
  color: ${p => p.theme.bodyBackgroundColor};
  background-color: ${p => p.theme.bodyFontColor};
  box-shadow: 0 0 10px ${p => p.theme.bodyFontColor};
  border-radius: 50%;
  line-height: 1.5;
  text-align: center;
  margin-top: 8px;
  padding: 10px;
`;

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo>GS</Logo>
      <MobileMenuIcon onClick={() => setMenuOpen(s => !s)} className={menuOpen ? "open" : ""}></MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>Home</StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  )
}