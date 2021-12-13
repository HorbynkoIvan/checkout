import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

export const SpecialInfoBlockSimilarProductsModalTitleSC = styled.div`
  @media only screen and ${device.mobileSm} {
    & > button {
      font-size: 12px;
    }
  }
`;

export const ScSpecialInfoDropdownWrapper = styled.div`
  padding-bottom: 8px;
`;
export const ScSpecialInfoDropdownControls = styled.div`
  text-align: center;
  & > button {
    flex-direction: row-reverse;
    & > span {
      margin-left: 0 !important;
      margin-right: 4px;
    }
    & > svg {
      transform: rotateZ(180deg);

      * {
        fill: #e57200;
      }
    }
  }
`;

export const ScSpecialInfoDropdownContent = styled.div`
  padding: 8px 16px 0 16px;
  & > section {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f5f4f1;
    padding-bottom: 16px;
    margin-bottom: 16px;

    & > div {
      display: flex;
      margin-bottom: 10px;
      & > a {
        height: 80px;
        width: 80px;
        flex: 0 0 80px;
        border-radius: 10px;
        border: 1px solid #e2dfd9;
        overflow: hidden;
        margin-right: 8px;
        display: inline-block;
        & > img {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          object-fit: contain;
        }
      }
      & > div {
        & > a {
          font: 500 14px / 24px ${({ theme }) => theme.mainFont};
          color: #000000;
          text-decoration: none;
        }
      }
    }
    & > p {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      & > a {
        text-decoration: none;
        color: #000000;
      }
      & > p {
        color: #807c77;
      }
    }
  }
`;
