import Link from 'next/link';

export const routes = [
  { path: '/', name: 'Home' },
  { path: '/posts', name: 'Posts' },
  { path: '/comments', name: 'Comments' },
  { path: '/albums', name: 'Albums' },
  { path: '/photos', name: 'Photos' },
  { path: '/todo', name: 'Todo' },
  { path: '/users', name: 'Users' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul>
          {routes.map(({ name, path }) => (
            <li key={path}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
