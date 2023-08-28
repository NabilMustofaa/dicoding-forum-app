import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col w-full my-12 gap-4">
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" className="h-12 w-full px-4 rounded bg-gray-200 text-gray-500" />
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="h-12 w-full px-4 rounded bg-gray-200 text-gray-500" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="h-12 w-full px-4 rounded bg-gray-200 text-gray-500" />
      <button type="button" onClick={() => register({ name, email, password })} className="h-12 w-full px-4 rounded bg-orange-500 font-semibold text-white">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
