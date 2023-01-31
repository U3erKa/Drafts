import { useSelector } from 'react-redux';

import { Header } from 'components';

export default function Home() {
  const { data: user } = useSelector((state: any) => state.user);

  return (
    <div>
      <Header />
      Home
      {user && <p>Hello {user.firstName} {user.lastName}</p>}
    </div>
  );
}
