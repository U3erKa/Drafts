import React, { useReducer } from 'react';

function reducer(state, action) {
  const newState = { ...state, [action.type]: action.payload };
  return newState;
}

const initialState = {
  email: '',
  password: '',
  isRemembering: false,
};

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { name, value, checked, type } }) => {
    const newData = type === 'checkbox' ? checked : value;
    dispatch({ type: name, payload: newData });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="isRemembering"
          checked={state.isRemembering}
          onChange={handleChange}
        />
        Remember me
      </label>
      <button>Login</button>
    </form>
  );
}
