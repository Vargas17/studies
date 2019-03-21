import styled from 'styled-components';
import { COLORS, SIZES } from '../../assets';

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const AddColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  min-height: 200px;
  background-color: ${COLORS.whiteColor};
  border-radius: ${SIZES.borderRadius};
  border-color: ${COLORS.borderColor};
  border-width: 3px;
  border-style: dashed;
  color: ${COLORS.fontColor};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.darkBackground};
  }
`;

export const IndexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  border-color: ${COLORS.borderColor};
  border-width: 1px;
  border-style: dashed;
  background-color: ${COLORS.darkBackground};
`;

export const IndexCell = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  color: ${COLORS.fontColor};
  background-color: ${COLORS.darkBackground};
`;
