import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header/header.component';
import { Links } from './links';
import Home from './home/home.component';
import GlobalStyle from '../utils/styles/GlobalStyle';
import Favourites from './favourites/favourites.component';
import Page404 from './404/404.component';

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path={Links.homePage} component={Home} />
        <Route exact path={Links.favourites} component={Favourites} />
        <Route path={Links.favourites} component={Favourites} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
