import React from 'react';
import { ContentPropsType } from './content.types';
import { StyledContent } from './content.style';

const Content: React.FC<ContentPropsType> = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

export default Content;
