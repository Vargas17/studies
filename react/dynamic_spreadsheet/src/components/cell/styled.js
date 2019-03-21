import styled, { css } from 'styled-components';
import { COLORS } from '../../assets';

export const CellContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  color: ${COLORS.fontColor};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.darkBackground};
  }
  ${(props) => props.isTitle && css`
    border-bottom-color: ${COLORS.borderColor};
    border-bottom-width: 1;
    border-bottom-style: dashed;
  `}
  ${(props) => props.error && css`
    background-color: ${COLORS.lightRedColor};
  `}
`;

export const CellText = styled.div`
  color: ${COLORS.fontColor}
  ${(props) => props.isTitle && css`
    font-weight: bold;
  `}
`;
