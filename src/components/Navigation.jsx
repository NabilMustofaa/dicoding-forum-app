/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navigation({
  authUser = null,
  signOut = () => {},
}) {
  if (!authUser) {
    return (
      <div className="h-16 flex justify-end items-center px-12 bg-white border border-gray-200">
        <Link to="/register">
          <button type="button" className="flex justify-between items-center mr-4 h-12 w-36 px-4 rounded bg-orange-500 font-semibold text-white">
            <FaRegUser />
            Register
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className="h-12 w-24 px-4 rounded bg-gray-200 font-semibold text-gray-500">
            Login
          </button>
        </Link>
      </div>
    );
  }

  const { id, avatar, name } = authUser;

  return (
    <div className="h-16 flex justify-between items-center px-12 bg-white border border-gray-200">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={id} title={name} className="h-12 w-12 rounded-full" />
        <span className="ml-2 font-semibold font-lg text-gray-500">{name}</span>
      </div>
      <Link to="/">
        Discussion App
      </Link>
      <button type="button" onClick={signOut} className="h-12 w-24 px-4 rounded bg-gray-200 font-semibold text-gray-500"> Logout </button>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
