import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cell } from '..';
import { ColumnContainer } from './styled';

export class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, items } = this.props;
    return (
      <ColumnContainer>
        {items.map(({ id, value }) => <Cell key={id} value={value} type={type} />)}
      </ColumnContainer>
    );
  }
}

export default Column;

Column.defaultProps = {
  items: []
};

Column.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired
};
