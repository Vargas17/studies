import React from 'react';
import { Header, Title } from './styled';
import { appName } from '../../config';

const HeaderBar = () => (
  <Header>
    <Title>{appName}</Title>
  </Header>
);

export default HeaderBar;
