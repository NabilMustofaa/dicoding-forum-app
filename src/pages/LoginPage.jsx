import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <section className="flex">
      <header className=" w-2/3 bg-white flex justify-center items-center">
        <img src="" alt="" srcSet="src\assets\login.jpg" className="w-full h-full object-cover" />
      </header>
      <article className=" w-1/3 flex flex-col justify-center items-center px-12 bg-gray-50">
        <h2 className=" text-lg">
          <strong className=" text-3xl"> We`ve Missed You!</strong>
          <br />
          <br />
          More than 150 questions are waiting for your wise suggestions!
        </h2>

        <LoginInput login={onLogin} />

      </article>
    </section>
  );
}

export default LoginPage;
