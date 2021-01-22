import React from 'react';
import { useDispatch } from 'react-redux';
import homeSlice from './home.reducer';
import Content from '../../components/content/content.component';

const Home: React.FC = () => {
  const { setDate } = homeSlice.actions;
  const dispatch = useDispatch();

  return (
    <Content>
      <button
        type="button"
        onClick={() => {
          dispatch(setDate('new'));
        }}
      >
        test
      </button>
    </Content>
  );
};

export default Home;
