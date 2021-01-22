import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import homeSlice from './home.reducer';
import { RootState } from '../app.reducer';

export type UsePhotosType = {
  currentDate: Date;
  handleNextPhoto: () => void;
};

const usePhotos = (): UsePhotosType => {
  const { setNextDate } = homeSlice.actions;

  const currentDate = useSelector(
    (state: RootState) => state.home.viewedDates[0],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNextDate(new Date()));
  }, [dispatch]);

  const handleNextPhoto = () => dispatch(setNextDate());

  return {
    currentDate,
    handleNextPhoto,
  };
};

export default usePhotos;
