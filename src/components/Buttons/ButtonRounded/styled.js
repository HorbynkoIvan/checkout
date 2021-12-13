import styled from 'styled-components';

export const ButtonRoundedSC = styled.a`
  display: inline-block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  img {
    width: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`;
