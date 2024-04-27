import { useReducer, type FormEventHandler } from 'react';

function reducer(state: typeof initialState, action: { type: string; payload }) {
  return { ...state, [action.type]: action.payload };
}

const initialState = {
  email: '',
  password: '',
  age: '' as `${number}`,
  isRemembered: false,
};

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { name, value, checked, type } }) => {
    dispatch({ type: name, payload: type === 'checkbox' ? checked : value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData), state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" value={state.age} onChange={handleChange} />
      <label>
        <input
          type="checkbox"
          name="isRemembered"
          value={`${state.isRemembered}`}
          checked={state.isRemembered}
          onChange={handleChange}
        />
        Remember me
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
