import React, { Component } from 'react';
import {
  MainContainer, SpreadSheet, AddForm, Modal, Button
} from '../../components';
import { addEmptyRowsToAll, createColumn } from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rowsNum: 10,
      showModal: false
    };
  }

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

  render() {
    const { data, showModal } = this.state;
    return (
      <MainContainer>
        <SpreadSheet data={data} handleAddClick={this.showModal} />
        {data.length > 0 && <Button onClick={this.handleAddClick}>Add + 10 rows</Button>}
        <Modal show={showModal} handleClose={this.hideModal}>
          <AddForm handleSaveClick={this.createColumn} />
        </Modal>
      </MainContainer>
    );
  }
}

export default Home;
