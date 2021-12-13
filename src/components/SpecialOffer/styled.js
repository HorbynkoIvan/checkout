import styled from 'styled-components';

export const SpecialOfferStyled = styled.div`
  padding: 16px;
  width: 328px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  text-align: center;
  color: #000000;
  box-sizing: border-box;
  align-self: baseline;

  .price_block {
    margin: 16px 0 16px 88px;
  }

  .btn {
    width: 100%;
    height: 40px;
  }
`;

export const SubTitleStyled = styled.h2`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  margin: 8px 0 21px;
`;

export const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: baseline;

  .block {
    margin-left: 8px;
    max-width: 290px;
    display: flex;
    flex-direction: column;
    text-align: left;
    & > a {
      font: 400 14px / 21px ${({ theme }) => theme.mainFont};
      color: #000000;
      text-decoration: none;
    }
    & > p {
      font: 400 14px / 21px ${({ theme }) => theme.mainFont};
      color: #999999;
    }
  }
`;
