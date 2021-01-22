import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import homeSlice from './home.reducer';
import { RootState } from '../app.reducer';
import Content from '../../components/content/content.component';

const Home: React.FC = () => {
  const { setNextDate } = homeSlice.actions;
  const currentDate = useSelector(
    (state: RootState) => state.home.viewedDates[0],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentDate) {
      dispatch(setNextDate(new Date()));
    }

    // dispatch(setNextDate());
  }, [currentDate, dispatch]);

  return (
    <Content>
      <>
        <div>{currentDate && format(new Date(currentDate), 'yyyy-MM-dd')}</div>
        <button
          type="button"
          onClick={() => {
            dispatch(setNextDate());
          }}
        >
          Next Day
        </button>
      </>
    </Content>
  );
};

export default Home;
