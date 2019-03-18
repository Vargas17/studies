import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, AddColumn } from './styled';
import { Column } from "..";

export class SpreadSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        {data.map(({ id, items, type }) => (<Column key={id} items={items} type={type} />))}
        <AddColumn>Add</AddColumn>
      </Container>
    );
  }
}

export default SpreadSheet;

SpreadSheet.defaultProps = {
  data: []
};

SpreadSheet.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
