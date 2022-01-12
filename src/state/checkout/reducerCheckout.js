// reducer store cart information
export const initialStateCheckoutData = {
  deliveryMethodsAPI: [],
  paymentMethods: [],
  deliveryMethodType: '',
  city: '',
  openedCheckoutModal: false,
  isLoading: false
};

export const initReducerCheckoutData = (state) => ({ ...state });

export const reducerCheckoutData = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return { ...state, ...action.payload };
    case 'update':
      return { ...state, ...action.payload };
    case 'reset':
      return initReducerCheckoutData(action.payload);
    default:
      return state;
  }
};
