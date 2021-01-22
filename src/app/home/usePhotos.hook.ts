import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import homeSlice from './home.reducer';
import { RootState } from '../app.reducer';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../definition/API';

export type PhotoDetails = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  /* eslint-disable camelcase */
  media_type: 'image' | 'video';
  service_version: string;
  /* eslint-enable camelcase */
  title: string;
  url: string;
};

export type UsePhotosType = {
  currentDate: Date;
  handleNextPhoto: () => void;
  isLoading: boolean;
  details: PhotoDetails | null;
};

const usePhotos = (): UsePhotosType => {
  const { setNextDate } = homeSlice.actions;

  const currentDate = useSelector(
    (state: RootState) => state.home.viewedDates[0],
  );

  const apiDate = format(new Date(currentDate), 'yyyy-MM-dd');
  const URL = `${API_URL}&date=${apiDate}`;
  const { response, isLoading, error, fetchData } = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNextDate(new Date()));
  }, [dispatch]);

  useEffect(() => {
    if (currentDate && apiDate) {
      fetchData(URL);
    }
  }, [currentDate]);

  const handleNextPhoto = () => dispatch(setNextDate());

  return {
    currentDate,
    handleNextPhoto,
    isLoading,
    details: response,
  };
};

export default usePhotos;
