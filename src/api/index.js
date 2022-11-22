import queryString from 'query-string';
import { API_CONSTANTS } from '../configs';

export async function getUsers(options) {
  const defaultOptions = {
    page: API_CONSTANTS.PAGE,
    results: API_CONSTANTS.RESULTS,
    seed: API_CONSTANTS.API_KEY,
    nat: API_CONSTANTS.NATIONALITY,
    inc: API_CONSTANTS.INCLUDES,
  };
  const queryParams = queryString.stringify({ ...defaultOptions, ...options }, { arrayFormat: 'comma' });

  const data = await fetch(`${API_CONSTANTS.BASE_URL}?${queryParams}`);
  const result = await data.json();

  return result.results;
}
