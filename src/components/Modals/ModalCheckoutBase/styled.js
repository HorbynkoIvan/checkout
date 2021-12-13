import styled from 'styled-components';

export const ModalCheckoutBaseSC = styled.div`
  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    text-align: left;
  }
  form {
    margin-bottom: 16px;
    & > div {
      margin-bottom: 16px;
      &:nth-child(2) {
        margin-bottom: 0;
      }
    }
    & > button {
      margin-top: 16px;
      width: 100%;
      height: 40px;
    }
  }
`;

export const ModalCheckoutBaseBlockSC = styled.div`
  text-align: center;
  padding-top: 10px;
  margin-bottom: 4px;
  & > button {
    font-size: 15px;
  }
`;

export const ModalCheckoutBaseErrorAuthSocialSC = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
