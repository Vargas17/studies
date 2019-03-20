import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { Cell } from '..';
import { ColumnContainer } from './styled';

export class Column extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, rows, title } = this.props;
    return (
      <ColumnContainer>
        <Cell isTitle value={title} />
        {rows.map((r) => <Cell key={uid(r)} value={r.value} type={type} />)}
      </ColumnContainer>
    );
  }
}

export default Column;

Column.defaultProps = {
  rows: []
};

Column.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
