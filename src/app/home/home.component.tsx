import React from 'react';
import { format } from 'date-fns';
import Content from '../../components/content/content.component';
import usePhotos from './usePhotos.hook';
import Image from '../../components/image/image.component';

const Home: React.FC = () => {
  const { currentDate, isLoading, handleNextPhoto, details } = usePhotos();

  return (
    <Content>
      <>
        <div>{currentDate && format(new Date(currentDate), 'yyyy-MM-dd')}</div>
        <div>
          {details?.media_type === 'image' ? (
            <Image src={details?.url} loading={isLoading} />
          ) : (
            <div>For this day picture isnt available</div>
          )}
        </div>
        <button type="button" onClick={handleNextPhoto}>
          Next Day
        </button>
      </>
    </Content>
  );
};

export default Home;
