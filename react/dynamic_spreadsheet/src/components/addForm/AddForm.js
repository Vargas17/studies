/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, TextInput, SelectInput } from './styled';
import { Button } from '..';
import { types } from '../../utils';

class AddForm extends PureComponent {
  state = {
    title: '',
    type: '',
    errorTitle: false,
    errorType: false
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  }

  handleClick = () => {
    const { handleSaveClick } = this.props;
    const { title, type } = this.state;
    if (title && type) {
      return handleSaveClick(title, type);
    }
    return this.setState({ errorTitle: !title, errorType: !type });
  }

  render() {
    const { errorTitle, errorType } = this.state;
    return (
      <FormContainer>
        <TextInput error={errorTitle} onChange={this.handleTitleChange} placeholder="Type title..." />
        <SelectInput error={errorType} onChange={this.handleTypeChange}>
          <option value="">Select Type</option>
          <option value={types.text}>Text</option>
          <option value={types.date}>Date</option>
          <option value={types.number}>Number</option>
        </SelectInput>
        <Button onClick={this.handleClick}>Create</Button>
      </FormContainer>
    );
  }
}

export default AddForm;

AddForm.propTypes = {
  handleSaveClick: PropTypes.func.isRequired
};
