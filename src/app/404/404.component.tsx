import React from 'react';
import Content from '../../components/content/content.component';
import { LANG } from '../../lang/en';

const Page404: React.FC = () => {
  return <Content>{LANG.page404Text}</Content>;
};

export default Page404;
