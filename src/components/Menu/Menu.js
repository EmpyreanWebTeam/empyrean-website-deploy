import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
// import Logout from '../Login/Logout';


const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Games
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        Add Funds
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Profile
        </a>
      <a href="https://www.latlmes.com/tech/rick-roll-1" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Here's a
        <br></br>
        Rick Roll link
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        {/* <Logout /> */}
        </a>
    </StyledMenu>
  )
}


Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;