import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import homeSlice from './home.reducer';
import { RootState } from '../app.reducer';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../definition/API';
import { UsePhotosType } from './home.types';

const usePhotos = (): UsePhotosType => {
  const [flag, setFlag] = useState(false);
  const { setNextDate, addFavourite } = homeSlice.actions;

  const currentDate = useSelector(
    (state: RootState) => state.home.viewedDates[0],
  );

  const apiDate = currentDate && format(new Date(currentDate), 'yyyy-MM-dd');
  const URL = `${API_URL}&date=${apiDate}`;
  const { response, isLoading, error, fetchData } = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNextDate(new Date()));
    setFlag(true);
  }, [dispatch]);

  useEffect(() => {
    if (currentDate && apiDate && flag) {
      fetchData(URL);
    }
  }, [currentDate]);

  const handleNextPhoto = () => dispatch(setNextDate());
  const handleAddFavourite = (date: Date) => dispatch(addFavourite(date));

  return {
    currentDate,
    handleNextPhoto,
    handleAddFavourite,
    isLoading,
    details: response,
  };
};

export default usePhotos;
