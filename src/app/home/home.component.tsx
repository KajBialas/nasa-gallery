import React from 'react';
import { format } from 'date-fns';
import Content from '../../components/content/content.component';
import usePhotos from './usePhotos.hook';

const Home: React.FC = () => {
  const { currentDate, handleNextPhoto } = usePhotos();

  return (
    <Content>
      <>
        <div>{currentDate && format(new Date(currentDate), 'yyyy-MM-dd')}</div>
        <button type="button" onClick={handleNextPhoto}>
          Next Day
        </button>
      </>
    </Content>
  );
};

export default Home;
