import React from 'react';
import { format } from 'date-fns';
import Content from '../../components/content/content.component';
import usePhotos from './usePhotos.hook';

const Home: React.FC = () => {
  const { currentDate, handleNextPhoto, details } = usePhotos();

  return (
    <Content>
      <>
        <div>{currentDate && format(new Date(currentDate), 'yyyy-MM-dd')}</div>
        <div>
          {details?.media_type === 'image' ? (
            <img src={details?.url} alt="" />
          ) : (
            <video src={details?.url} />
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
