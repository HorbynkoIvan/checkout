import styled from 'styled-components/macro';

export const ContactsListStyled = styled.div`
  .address_template {
    .phone,
    .email {
      color: #807c77;
    }
  }
  .another {
    margin-bottom: 16px;
  }
  .showMore {
    color: #807c77;
    margin-bottom: 20px;
    span {
      border-color: #807c77;
    }
    svg {
      position: absolute;
      left: calc(100% + 4px);
      transition: transform 0.3s;
    }
    &.active {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;
