import React from 'react';
import {
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledNavLink,
} from './header.style';
import { Links } from '../../app/links';
import { LANG } from '../../lang/en';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo to={Links.homePage}>{LANG.applicationName}</StyledLogo>
      <StyledNav>
        <StyledNavLink to={Links.favourites}>
          {LANG.linkFavouritesLabel}
        </StyledNavLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
