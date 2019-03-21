import React, { Component } from 'react';
import update from 'immutability-helper';
import {
  MainContainer, SpreadSheet, AddForm, Modal, Button
} from '../../components';
import { addEmptyRowsToAll, createColumn } from '../../utils';

class Home extends Component {
  state = {
    data: [],
    rowsNum: 10,
    showModal: false
  };

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  createColumn = (title, type) => {
    const { rowsNum } = this.state;
    this.hideModal();
    const newColumn = createColumn(title, type, rowsNum);
    this.setState((prevState) => ({ data: [...prevState.data, newColumn] }));
  }

  handleAddClick = () => {
    this.setState((prevState) => ({
      rowsNum: prevState.rowsNum + 10,
      data: addEmptyRowsToAll(prevState.data, prevState.rowsNum)
    }));
  }

  saveCell = (value, colIdx, cellIdx) => {
    this.setState((prevState) => ({
      data: update(prevState.data, { [colIdx]: { rows: { [cellIdx]: { value: { $set: value } } } } })
    }));
  }

  saveTitle = (value, colIdx) => {
    this.setState((prevState) => ({
      data: update(prevState.data, { [colIdx]: { title: { $set: value } } })
    }));
  }

  render() {
    const { data, showModal, rowsNum } = this.state;
    return (
      <MainContainer>
        <SpreadSheet
          data={data}
          rowsNum={rowsNum}
          handleAddClick={this.showModal}
          onSave={this.saveCell}
          onSaveTitle={this.saveTitle}
        />
        {data.length > 0 && <Button big onClick={this.handleAddClick}>Add + 10 rows</Button>}
        <Modal show={showModal} handleClose={this.hideModal}>
          <AddForm handleSaveClick={this.createColumn} />
        </Modal>
      </MainContainer>
    );
  }
}

export default Home;
