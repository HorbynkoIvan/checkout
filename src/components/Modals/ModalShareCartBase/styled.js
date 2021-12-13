import styled from 'styled-components';
import { ReactComponent as ChevronIcon } from '../../assets/img/chevron.svg';

export const ModalShareCartBaseSC = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  align-items: flex-start;
  & > button {
    color: #807c77;
    margin-bottom: 18px;
    &:last-child {
      position: relative;
      margin-bottom: 0;
    }
    span {
      border-color: #807c77;
    }
  }

  .modal-share-cart__email {
    font-weight: bold;
  }

  form {
    width: 100%;
    & > button {
      width: 100%;
      height: 36px;
      margin-top: 16px;
    }
  }
`;

export const ChevronIconStyled = styled(ChevronIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${({ open }) => open && `rotate(-180deg)`};
  left: calc(100% + 7px);
  transition: 0.3s;
`;
