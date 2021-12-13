import React from 'react';
import { PaymentsMethods } from './PaymentsMethods';

// const paymentsDataLoaded = [
//   {
//     id: 1,
//     title: 'Наличными',
//     description: '',
//   },
//   {
//     id: 2,
//     title: 'Visa/Mastercard',
//     description: '',
//   },
//   {
//     id: 3,
//     title: 'Приват24',
//     description: '',
//   },
//   {
//     id: 4,
//     title: 'GooglePay',
//     description: '',
//   },
//   {
//     id: 5,
//     title: 'ApplePay',
//     description: 'Оплата после подтверждение заказа оператором',
//   },
// ];

export default {
  title: 'Containers/PaymentsMethods',
  component: PaymentsMethods,
  decorators: [
    (story) => (
      <PaymentsMethods>
        {(state, setState) => <div>{story(state, setState)}</div>}
      </PaymentsMethods>
    ),
  ],
};

const Template = (args) => <PaymentsMethods {...args} />;

export const PaymentsMethodsEx = Template.bind({});

PaymentsMethodsEx.args = {};
