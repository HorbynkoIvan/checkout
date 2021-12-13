import styled from 'styled-components';

export const TitlePageStyled = styled.h2`
  font-family: ${({ theme }) => theme.mainFont};
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
`;

export const TitleBlockStyled = styled.h3`
  font-family: ${({ theme }) => theme.mainFont};
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`;

export const TitleSubStyled = styled.h3`
  font-family: ${({ theme }) => theme.mainFont};
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const TitleInnerStyled = styled.h4`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
`;

export const TitleLabelStyled = styled.h5`
  font-size: 12px;
  line-height: 16px;
`;
