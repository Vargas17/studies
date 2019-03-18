import styled from 'styled-components';
import { COLORS, SIZES } from '../assets';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - ${SIZES.HEADERS});
  padding: 30px 42px;
`;

export const Button = styled.button`
  outline: none;
  min-height: 35px;
  background-color: ${COLORS.primaryColor};
  color: ${COLORS.fontColor};
  font-size: ${SIZES.fontSizeMedium}
  border-radius: ${SIZES.borderRadius};
  border-color: ${COLORS.borderColor};
  border-width: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.darkBackground};
  }
`;
