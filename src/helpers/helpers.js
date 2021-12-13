const decodeLangParamToUrlRedesign = (code) => {
  switch (code) {
    case 'uk-UA':
      return '/ua/';

    case 'ru-RU':
      return '/';

    default:
      return '/';
  }
};

export const pageLangParamRedesign = decodeLangParamToUrlRedesign(
  document.querySelector('html').getAttribute('lang')
);

export function formatDate(date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

export function setMaxLength(query, maxLength) {
  return query.length <= maxLength ? query : query.substr(0, maxLength);
}
