import styled from 'styled-components/macro';
import {theme} from "../../../theme/theme";

export const SCWarDelivery = styled.div`
  font: 700 14px / 24px ${({theme}) => theme.mainFont};
  font-family: ${theme.mainFont};
  background: #FF7F00;
  border-radius: 20px;
  padding: 16px;
  color: #ffffff;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.3s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg path {
    fill: #ffffff;
  }
  
  &:hover {
    opacity: 0.8;
  }
`;
