export async function getUsers(options): Promise<any[]> {
  const searchParams = new URLSearchParams({
    page: 1,
    results: 10,
    seed: 'foobarbaz',
    nat: 'ua',
    inc: ['gender', 'name', 'location', 'email', 'login'],
    ...options,
  });
  const data = await fetch(`https://randomuser.me/api?${searchParams}`);
  const result = await data.json();

  return result.results;
}
