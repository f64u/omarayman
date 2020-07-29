import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle, home }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
  <Wrapper active={sidebar} onClick={toggle} theme={theme}>
    <NavbarLinks home={home} />
  </Wrapper>
  )
};

export default Sidebar;
