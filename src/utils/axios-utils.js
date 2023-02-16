// This is an axios interceptor for REST API requests
import axios from 'axios';

const client = axios.create({ baseURL: 'https://welbi.org/api' });

export const request = ({ ...options }) => {
  // Get the bearer token from local storage
  // const bearerTokenFromLocalStorage = JSON.parse(
  //   localStorage.getItem('Bearer')
  // );
  // Add the bearer token to axios request header
  client.defaults.headers.common = {
    // Authorization: `Bearer ${bearerTokenFromLocalStorage}`,
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  };

  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionaly catch errors and add additional logging here
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
