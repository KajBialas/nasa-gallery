import React from 'react';
import Content from '../../components/content/content.component';
import useFavourites from './useFavourites.hook';
import Image from '../../components/image/image.component';

const Favourites: React.FC = () => {
  const { photosDetailsList } = useFavourites();

  const renderPhotos = () =>
    photosDetailsList.map((element) => <Image src={element.url} />);

  return (
    <Content>
      <>
        <h2>Favourites</h2>
        <div>{renderPhotos()}</div>
      </>
    </Content>
  );
};

export default Favourites;
