import styled from 'styled-components/macro';
import { ReactComponent as ChevronLeft } from '../../../assets/img/chevronLeft.svg';

export const ButtonReturnStyled = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
  color: #807c77;
  span {
    font: 500 12px / 16px ${({ theme }) => theme.mainFont};
    margin-left: 4px;
    border-bottom: 1px dotted #807c77;
  }
`;

export const ChevronLeftStyled = styled(ChevronLeft)`
  * {
    stroke: ${(props) => (props.color ? props.color : null)};
  }
`;
