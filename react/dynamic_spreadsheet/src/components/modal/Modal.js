import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalContainer, ModalWrapper } from './styled';

const Modal = ({ handleClose, show, children }) => (
  <ModalContainer show={show}>
    <ModalWrapper>
      <FontAwesomeIcon onClick={handleClose} icon="times" />
      {children}
    </ModalWrapper>
  </ModalContainer>
);

export default Modal;

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.any
};
