import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../components/header/header.component';
import { Links } from './links';
import Home from './home/home.component';
import GlobalStyle from '../utils/styles/GlobalStyle';
import Favourites from './favourites/favourites.component';
import Page404 from './404/404.component';
import { store } from './app.reducer';

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path={Links.homePage} component={Home} />
          <Route exact path={Links.favourites} component={Favourites} />
          <Route path={Links.favourites} component={Favourites} />
          <Route component={Page404} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default Index;
