import styled from 'styled-components';
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
`;
