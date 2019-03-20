import styled, { css } from 'styled-components';
import { COLORS } from '../../assets';

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const TextInput = styled.input`
  margin-bottom: 30px;
  type: text;
  ${(props) => props.error && css`
    border-color: ${COLORS.redColor};
  `}
`;

export const SelectInput = styled.select`
  margin-bottom: 30px;
  ${(props) => props.error && css`
    border-color: ${COLORS.redColor};
  `}
`;
