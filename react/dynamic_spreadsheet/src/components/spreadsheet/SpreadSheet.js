import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, AddColumn, IndexColumn, IndexCell
} from './styled';
import { Column } from '..';
import { createArrayFromNum } from '../../utils';

const SpreadSheet = ({
  data, handleAddClick, onSave, onSaveTitle, rowsNum
}) => (
  <Container>
    {data.length > 0
        && (
          <IndexColumn>
            {createArrayFromNum(rowsNum + 1).map((n) => <IndexCell key={n}>{n}</IndexCell>)}
          </IndexColumn>
        )
    }
    {data.map(({
      rows, type, title
    }, idx) => (
      <Column
        key={uid(title, idx)}
        rows={rows}
        type={type}
        title={title}
        colIdx={idx}
        onSave={onSave}
        onSaveTitle={onSaveTitle}
      />
    ))}
    <AddColumn onClick={handleAddClick}>
      <FontAwesomeIcon icon="plus" />
    </AddColumn>
  </Container>
);

export default SpreadSheet;

SpreadSheet.defaultProps = {
  data: []
};

SpreadSheet.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleAddClick: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSaveTitle: PropTypes.func.isRequired,
  rowsNum: PropTypes.number.isRequired
};
