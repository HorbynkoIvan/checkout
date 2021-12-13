export const initialErrors = {
  phone: '',
  lastname: '',
  firstname: '',
  middlename: '',
  email: '',

  department: '',
  street: '',

  house: '',
  entrance: '',
  floor: '',
  flat: '',
};

export const initReducerErrors = (state) => ({ ...state });

export const reducerErrorsForm = (state, { type, payload }) => {
  switch (type) {
    case 'update':
      return { ...state, ...payload };
    case 'reset':
      return initReducerErrors(payload);
    default:
      return state;
  }
};
