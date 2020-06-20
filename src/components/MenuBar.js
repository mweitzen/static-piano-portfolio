import React from 'react';
import { Link } from '@reach/router'
import styled from 'styled-components'

import FullScreenMenu from './FullScreenMenu';

import {
  Hidden,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    color: #333333;
    padding: 1rem;
    display: inline-block;
    text-transform: uppercase;
  }
  & a:hover {
    font-weight: 500;
    color: black;
  }
  & .active {
    color: black;
    background-image: linear-gradient(to right, #000, #000);
    background-position: 50% 73%;
    background-repeat: no-repeat;
    background-size: 50% 1px;
  }
`

const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 0;
`

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null
}

const NavLink = ({to, text}) => (
  <Link getProps={isActive} to={to}>
    {text}
  </Link>
)

const MenuNavLink = ({to, text}) => (
  <Link to={to}>
    <Button size="large" variant="text" >
      {text}
    </Button>
  </Link>
)

const links = [
  {path: '/', text:'Home'},
  {path:"/about", text:"About"},
  {path:"/listen", text:"Listen"},
  // {path:"/schedule", text:"Schedule"},
  // {path:"/live", text:"Live!"},
  {path:"/contact", text:"Contact"},
];

const MenuBar = (props) => (
    <Nav>
      <Hidden xsDown>
        {
          links.map(({path, text}, key) => (
            <NavLink to={path} text={text} key={key}/>
          ))
        }
      </Hidden>
      <Hidden smUp>
        <MobileMenu>
          <MenuNavLink to="/listen" text='Listen' />
          <FullScreenMenu paths={links} />
        </MobileMenu>
      </Hidden>
    </Nav>
  )

export default MenuBar
