import queryString from 'query-string';

export async function getUsers(options): Promise<any> {
  const searchParams = {
    page: 1,
    results: 10,
    seed: 'foobarbaz',
    nat: 'ua',
    inc: ['gender', 'name', 'location', 'email', 'login'],
    ...options,
  };
  const queryParams = queryString.stringify(searchParams, { arrayFormat: 'comma' });

  const data = await fetch(`https://randomuser.me/api?${queryParams}`);
  const result = await data.json();

  return result.results;
}
