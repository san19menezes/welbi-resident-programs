import { request } from './axios-utils';

export const NAVIGATION_LIST = ['programs', 'residents'];
export const BEARER_TOKEN_API = 'https://yourapi.com';
export const RESIDENT_STATUS = ['HERE', 'LOA', 'ISOLATION'];
export const RESIDENT_LEVEL_OF_CARE = [
  'INDEPENDENT',
  'MEMORY',
  'ASSISTED',
  'LONGTERM',
];
export const RESIDENT_AMBULATION = [
  'WALKER',
  'CANE',
  'NOLIMITATIONS',
  'WHEELCHAIR',
];
export const PROGRAM_DIMENSION = [
  'Intellectual',
  'Community',
  'Physical',
  'Social',
  'Emotional',
];
export const fetchResidentsList = () => {
  return request({ url: '/residents', method: 'get' });
};

export const fetchProgramsList = () => {
  return request({ url: '/programs', method: 'get' });
};
export const addNewProgramToList = (data) => {
  return request({ url: '/programs', method: 'post', data: data });
};
