import styled from 'styled-components/macro';

export const BlockRadioSC = styled.div`
  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 16px 16px 16px 40px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
  transition: 0.3s ease;
  .title {
    position: relative;
    font-weight: bold;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: calc(100% + 8px);
      height: 16px;
      width: 16px;
      background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
      border: 1px solid #c4cdd5;
      border-radius: 100%;
      box-sizing: border-box;
      transition: 0.3s;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: calc(100% + 12px);
      height: 8px;
      width: 8px;
      background: transparent;
      border-radius: 100%;
      box-sizing: border-box;
    }
  }
  &.active {
    border: 1px solid #693bff;
    .title {
      &:before {
        border: 1px solid #6a3cfd;
      }
      &:after {
        background: #6a3cfd;
      }
    }
  }
`;
