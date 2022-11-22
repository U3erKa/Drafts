import queryString from 'query-string';

export async function getUsers(options) {
  const defaultOptions = { page: 1, results: 10, seed: 'foobarbaz', nat: 'ua', inc: ['gender', 'name', 'location', 'email', 'login'] };
  const queryParams = queryString.stringify({ ...defaultOptions, ...options }, {arrayFormat: 'comma'});

  const data = await fetch(`https://randomuser.me/api/?${queryParams}`);
  const result = await data.json();

  return result.results;
}
