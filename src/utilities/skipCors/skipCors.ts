import axios from 'axios';

// const skipCorsURL = 'http://localhost:4152/';
// const apiBaseUrl = 'https://www.metaweather.com/api/location/search/?';
// const apiQuery = 'query=SAN';
// console.log(`${skipCorsURL}${apiBaseUrl}${apiQuery}`)

export const skipCors = async (
  apiBaseUrl: string,
  skipCorsURL: string,
  apiQuery: string
) => {
  return axios
    .get(`${skipCorsURL}${apiBaseUrl}${apiQuery}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('AXIOS ERROR', error);
    });
};
