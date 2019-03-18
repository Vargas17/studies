import React, { Component } from 'react';
import { CellContainer } from './styled';
// import PropTypes from 'prop-types';

export class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <CellContainer>{value}</CellContainer>
    );
  }
}

export default Cell;

// Cell.propTypes = {
//   type: PropTypes.string.isRequired,
//   value:
// };
