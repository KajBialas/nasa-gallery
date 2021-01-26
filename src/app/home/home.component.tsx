import React from 'react';
import { format } from 'date-fns';
import Content from '../../components/content/content.component';
import usePhotos from './usePhotos.hook';
import Image from '../../components/image/image.component';
import {
  StyledNoPhotoPlaceholder,
  StyledButton,
  StyledPhotoDescription,
} from './home.style';
import { LANG } from '../../lang/en';

const Home: React.FC = () => {
  const {
    currentDate,
    isLoading,
    handleNextPhoto,
    details,
    handleAddFavourite,
  } = usePhotos();

  return (
    <Content>
      <>
        <StyledPhotoDescription>
          {LANG.photoDescription}
          <span>
            {currentDate && format(new Date(currentDate), 'dd.MM.yyyy')}
          </span>
        </StyledPhotoDescription>
        <div>
          {details?.media_type === 'image' ? (
            <Image src={details?.url} loading={isLoading} />
          ) : (
            <StyledNoPhotoPlaceholder>
              {LANG.noPhotoPlaceholder}
            </StyledNoPhotoPlaceholder>
          )}
        </div>
        <StyledButton type="button" onClick={handleNextPhoto}>
          {LANG.nextButtonText}
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => handleAddFavourite(currentDate)}
        >
          {LANG.favouritesButtonText}
        </StyledButton>
      </>
    </Content>
  );
};

export default Home;
