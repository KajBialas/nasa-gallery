import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export const StyledNoPhotoPlaceholder = styled.div`
  display: block;
  width: 100%;
  height: 400px;
  text-align: center;
  overflow: hidden;
  margin: 20px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 400px;
`;

export const StyledButton = styled.button`
  border: 1px solid ${colors.BLACK};
  color: ${colors.BLACK};
  cursor: pointer;
  background-color: ${colors.WHITE};
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 3px;
  transition: all 200ms linear;
  margin: 0 10px;

  &:hover {
    color: ${colors.LIGHT};
    border: 1px solid ${colors.LIGHT};
  }
`;

export const StyledPhotoDescription = styled.div`
  font-size: 18px;
  font-weight: bold;

  span {
    font-weight: 300;
  }
`;
