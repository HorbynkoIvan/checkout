export const theme = {
  mainFont: 'Montserrat, sans-serif',

  black: '#000000',
  lightBlack: '#202020',
  lighterBlack: '#444444',
  grey: '#F5F4F1',
  orange: '#FF7F00',
};

const size = {
  mobileSm: 360,
  tabletSm: 768,
  tabletLg: 1024,
};

export const device = {
  mobileSm: `(max-width: ${size.mobileSm - 1}px)`,
  mobile: `(max-width: ${size.tabletSm - 1}px)`,
  tablet: `(min-width: ${size.tabletSm}px) and (max-width: ${size.tabletLg}px)`,
  tabletDesktop: `(min-width: ${size.tabletSm}px)`,
  desktop: `(min-width: ${size.tabletLg + 1}px)`,
};

const sm = window.matchMedia(device.mobileSm);
export const mobileSm = sm.matches;

const m = window.matchMedia(device.mobile);
export const mobile = m.matches;

const t = window.matchMedia(device.tablet);
export const tablet = t.matches;

const td = window.matchMedia(device.tabletDesktop);
export const tabletDesktop = td.matches;

const d = window.matchMedia(device.desktop);
export const desktop = d.matches;
