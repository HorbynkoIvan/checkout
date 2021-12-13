// reducer collects information before sending to server

// in initialState use just not validate fields
export const initialStateCheckoutForm = {
  startDate: '',
  date_delivery_customer: '',
  paymentMethod: 0,
  comment: '',
  privateHouse: false,
  callMe: false,
};

export const initReducerCheckoutForm = (state) => ({ ...state });

export const reducerCheckoutForm = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return { ...state, ...action.payload };
    case 'update':
      return { ...state, ...action.payload };
    case 'deleteField':
      Object.keys(action.payload).forEach((item) => {
        if (state.hasOwnProperty(item)) {
          delete state[item];
        }
      });
      // delete state[action.payload];
      return state;
    case 'reset':
      return initReducerCheckoutForm(action.payload);
    default:
      return state;
  }
};
