import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CellContainer, CellText } from './styled';
import { editableContent } from '..';

export class Cell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const EditableDiv = editableContent(CellContainer);
    const { value, isTitle } = this.props;
    return (
      <EditableDiv isTitle={isTitle} value={value} />
      // <CellContainer isTitle={isTitle}>
      //   <CellText isTitle={isTitle}>
      //     {value}
      //   </CellText>
      // </CellContainer>
    );
  }
}

export default Cell;

Cell.defaultProps = {
  value: '',
  isTitle: false
};

Cell.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  isTitle: PropTypes.bool
};
