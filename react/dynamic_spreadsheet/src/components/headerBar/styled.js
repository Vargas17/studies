import styled from 'styled-components';
import { SIZES, COLORS } from '../../assets';

export const Header = styled.div`
  height: ${SIZES.HEADERS};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 12px 0 ${COLORS.shadowColor};
`;

export const Title = styled.h1`
  font-size: ${SIZES.titles};
  color: ${COLORS.fontColor};
`;
