import React, { useState, useEffect } from 'react';
import { PropsImageType } from './image.types';
import { StyledImageContainer, StyledImage, StyledLoader } from './image.style';

const Image: React.FC<PropsImageType> = ({ src, loading }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const handleLoad = () => {
    setTimeout(() => {
      setImageLoading(false);
    }, 500);
  };
  useEffect(() => {
    setImageLoading(true);
  }, [src]);

  return (
    <StyledImageContainer>
      {(loading || imageLoading) && <StyledLoader />}
      <StyledImage
        src={src}
        displayImage={!loading && !imageLoading}
        onLoad={handleLoad}
      />
    </StyledImageContainer>
  );
};

export default Image;
