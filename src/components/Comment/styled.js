import styled from 'styled-components/macro';
import { ReactComponent as ResizerIcon } from '../../assets/img/resizer.svg';
import { device } from '../../theme/theme';

export const LabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    background: #ffffff;
    border: 1px solid #dcd9d2;
    box-sizing: border-box;
    border-radius: 20px;
    outline: none;
    padding: 8px 16px;
    min-height: 80px;
    font-size: 14px;
    line-height: 21px;
    resize: none;
  }
  span {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 8px;
  }

  @media only screen and ${device.mobileSm} {
  }
`;

export const ResizerIconStyled = styled(ResizerIcon)``;
