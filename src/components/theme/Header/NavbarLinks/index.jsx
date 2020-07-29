import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import {Link} from "gatsby"
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, home }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      {home &&
      <>
      <AnchorLink href="/#about">About</AnchorLink>
      <AnchorLink href="/#projects">Personal Work</AnchorLink>
      <AnchorLink href="/#contact">Contact</AnchorLink>
      </>}
      {!home &&
      <>
      <Link to="/#about">About</Link>
      <Link to="/#projects">Personal Work</Link>
      <Link to="/#contact">Contact</Link>
      </>
      }
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
