export const validationCheckout = (values) => {
  const regExpEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const regExpCyrillic = /[\u0400-\u04FF]/;
  const regExpCyrillicWithDash = /^[а-яА-ЯёЁіІїЇєЄґҐюЮ\-]*$/u; // pass only cyrillic
  const regExpCyrillicNumber = /^[а-яА-ЯёЁіІїЇєЄґҐюЮ\-\/0-9]*$/u; // pass only cyrillic and numbers

  const errors = {};

  if (values.phone === '') {
    errors.phone = { empty: true };
  } else if (values.phone && values.phone.includes('_')) {
    errors.phone = { incorrectPhone: true };
  }

  if (values.lastname === '') {
    errors.lastname = { empty: true };
  } else if (values.lastname && !regExpCyrillicWithDash.test(values.lastname)) {
    errors.lastname = { incorrect: true };
  }

  if (values.firstname === '') {
    errors.firstname = { empty: true };
  } else if (
    values.firstname &&
    !regExpCyrillicWithDash.test(values.firstname)
  ) {
    errors.firstname = { incorrect: true };
  }

  if (values.middlename === '') {
    errors.middlename = { empty: true };
  } else if (
    values.middlename &&
    !regExpCyrillicWithDash.test(values.middlename)
  ) {
    errors.middlename = { incorrect: true };
  }

  if (values.email === '') {
    errors.email = { empty: true };
  } else if (values.email && !regExpEmail.test(values.email)) {
    errors.email = { incorrectEmail: true };
  }

  if (values.house === '') {
    errors.house = { empty: true };
  }

  if (values.entrance === '' || values.entrance === null) {
    errors.entrance = { empty: true };
  }

  if (values.floor === '' || values.floor === null) {
    errors.floor = { empty: true };
  }

  if (values.flat === '' || values.flat === null) {
    errors.flat = { empty: true };
  }

  if (values.street === '') {
    errors.street = { empty: true };
  }

  if (values.department === '') {
    errors.department = { empty: true };
  }

  return errors;
};
