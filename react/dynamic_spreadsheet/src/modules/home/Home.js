import React, { Component } from 'react';
import { MainContainer, SpreadSheet } from '../../components';
import { mockData } from './mock';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockData
    };
  }

  render() {
    const { data } = this.state;
    return (
      <MainContainer>
        <SpreadSheet data={data} />
      </MainContainer>
    );
  }
}

export default Home;
