import styled from 'styled-components/macro';

export const ImagesGallerySC = styled.div`
  display: flex;
  & > div {
    width: 76px;
    height: 76px;
    position: relative;
    margin-left: 8px;
    overflow: hidden;
    border: 1px solid #e2dfd9;
    box-sizing: border-box;
    border-radius: 10px;
    &:first-child {
      margin-left: 0;
    }
    & > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    & > span {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.85);
      font: 600 16px / 24px ${({ theme }) => theme.mainFont};
      color: #000000;
    }
  }
`;
