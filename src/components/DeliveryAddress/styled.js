import styled from 'styled-components';

export const DeliveryAddressStyled = styled.div`
  .title_inner {
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;

export const RowSC = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
  .input_house,
  .input_flat,
  .input_entrance,
  .input_floor {
    width: calc(25% - 8px);
  }
`;
