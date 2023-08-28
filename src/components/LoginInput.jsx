import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col w-full my-12 gap-4">
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="h-12 w-full px-4 rounded bg-gray-200 text-gray-500" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="h-12 w-full px-4 rounded bg-gray-200 text-gray-500" />
      <button type="button" onClick={() => login({ email, password })} className="h-12 w-full px-4 rounded bg-orange-500 font-semibold text-white">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
