import { RootState } from 'app/store';
import { RegisterForm } from 'components';
import { useSelector } from 'react-redux';
import { AuthSliceState } from 'types/slices';

export default function Register() {
  const { isLoading, error } = useSelector<RootState, AuthSliceState>((state) => state.auth);

  return (
    <>
      {isLoading && <div>Registering...</div>}
      {error?.message}
      <h1>Register now</h1>
      <RegisterForm />
    </>
  );
}
