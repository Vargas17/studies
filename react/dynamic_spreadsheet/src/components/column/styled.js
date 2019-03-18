import styled from 'styled-components';
import { COLORS } from '../../assets';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  border-color: ${COLORS.borderColor};
  border-width: 3px;
  border-style: dashed;
`;
