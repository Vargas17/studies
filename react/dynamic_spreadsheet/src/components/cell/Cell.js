import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CellContainer, CellText } from './styled';
import { validateType } from '../../utils';

export class Cell extends PureComponent {
  state = {
    editing: false,
    error: false
  };

  toggleEdit = (e) => {
    const { editing } = this.state;
    e.stopPropagation();
    if (editing) {
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true }, () => {
        this.domElm.focus();
      });
    }
  }

  validate = () => {
    this.setState({ editing: false });
    const { isTitle, type } = this.props;
    if (!isTitle) {
      const isValid = validateType(this.domElm.textContent, type);
      this.setState({ error: !isValid });
      if (isValid) this.saveData();
    } else {
      this.saveTitle();
    }
  }

  saveData = () => {
    const { onSave, colIdx, cellIdx } = this.props;
    onSave(this.domElm.textContent, colIdx, cellIdx);
  }

  saveTitle = () => {
    const { onSaveTitle, colIdx } = this.props;
    onSaveTitle(this.domElm.textContent, colIdx);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      this.validate();
    }
  }

  render() {
    const { value, isTitle } = this.props;
    const { editing, error } = this.state;
    return (
      <CellContainer
        isTitle={isTitle}
        error={error}
        onClick={this.toggleEdit}
        contentEditable={editing}
        ref={(domNode) => {
          this.domElm = domNode;
        }}
        onBlur={this.validate}
        onKeyDown={this.handleKeyDown}
      >
        <CellText isTitle={isTitle}>
          {value}
        </CellText>
      </CellContainer>
    );
  }
}

export default Cell;

Cell.defaultProps = {
  type: '',
  value: '',
  isTitle: false
};

Cell.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  isTitle: PropTypes.bool,
  colIdx: PropTypes.number.isRequired,
  cellIdx: PropTypes.number,
  onSave: PropTypes.func,
  onSaveTitle: PropTypes.func
};
