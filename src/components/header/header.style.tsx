import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { colors } from '../../utils/styles/colors';

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${colors.LIGHT};
  padding: 20px;
`;

export const StyledLogo = styled(Link)`
  font-weight: 700;
`;

export const StyledNav = styled.nav`
  float: right;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 7px 0;
  margin: 0 10px;

  &:hover {
    border-bottom: 1px solid ${colors.LIGHT};
  }
`;
