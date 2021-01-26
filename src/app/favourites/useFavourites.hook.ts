import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '../app.reducer';
import { API_URL } from '../../definition/API';
import { PhotoDetailsType } from '../home/home.types';

type UseFavouritesType = {
  photosDetailsList: PhotoDetailsType[];
};

const useFavourites = (): UseFavouritesType => {
  const favourites = useSelector((state: RootState) => state.home.favourites);
  const [photosDetailsList, setPhotosDetailsList] = useState<
    PhotoDetailsType[]
  >([]);

  useEffect(() => {
    const urls: string[] = [];

    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setPhotosDetailsList((prevState) => [...prevState, json]);
      } catch (err) {
        console.log(err);
      }
    };

    favourites.map((dateElement: Date) =>
      urls.push(
        `${API_URL}&date=${format(new Date(dateElement), 'yyyy-MM-dd')}`,
      ),
    );

    urls.forEach((url) => {
      fetchData(url);
    });
  }, [favourites]);

  return {
    photosDetailsList,
  };
};

export default useFavourites;
