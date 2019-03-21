import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { Cell } from '..';
import { ColumnContainer } from './styled';

export const Column = ({
  type, rows, title, colIdx, onSave, onSaveTitle
}) => (
  <ColumnContainer>
    <Cell isTitle value={title} onSaveTitle={onSaveTitle} colIdx={colIdx} />
    {rows.map((r, idx) => (
      <Cell
        key={uid(r)}
        value={r.value}
        type={type}
        colIdx={colIdx}
        cellIdx={idx}
        onSave={onSave}
      />
    ))}
  </ColumnContainer>
);

export default Column;

Column.defaultProps = {
  rows: []
};

Column.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colIdx: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
  onSaveTitle: PropTypes.func.isRequired
};
