import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, AddColumn } from './styled';
import { Column } from '..';

class SpreadSheet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, handleAddClick } = this.props;
    return (
      <Container>
        {data.map(({
          rows, type, title
        }, idx) => (<Column key={uid(title, idx)} rows={rows} type={type} title={title} />))}
        <AddColumn onClick={handleAddClick}>
          <FontAwesomeIcon icon="plus" />
        </AddColumn>
      </Container>
    );
  }
}

export default SpreadSheet;

SpreadSheet.defaultProps = {
  data: []
};

SpreadSheet.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleAddClick: PropTypes.func.isRequired
};
