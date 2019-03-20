import styled, { css } from 'styled-components';
import { COLORS, SIZES } from '../../assets';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: ${COLORS.transparentBg};
  display: none;
  ${(props) => props.show && css`
    display: flex;
  `}
`;

export const ModalWrapper = styled.div`
  position:fixed;
  background: ${COLORS.whiteColor};
  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 20px;
  border-radius: ${SIZES.bigBorderRadius};
  transform: translate(-50%,-50%);
`;
