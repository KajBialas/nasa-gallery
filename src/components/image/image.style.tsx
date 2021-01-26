import styled from 'styled-components';
import { PropsStyledImageType } from './image.types';

export const StyledImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 400px;
  text-align: center;
  overflow: hidden;
  margin: 20px 0;
`;

export const StyledImage = styled.img<PropsStyledImageType>`
  display: ${({ displayImage }) => (displayImage ? 'inline-block' : 'none')};
  height: 100%;
`;

export const StyledLoader = styled.div`
  background: #000;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: #000;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    background: #000;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: '';
  }

  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;
