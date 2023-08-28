import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // @TODO: get dispatch function from store
  const onRegister = ({ name, email, password }) => {
    // @TODO: dispatch async action to register
    dispatch(asyncRegisterUser({ name, email, password })); // @TODO: navigate to home page
    navigate('/');
  };
  return (
    <section className="flex">
      <header className=" w-2/3 bg-white flex justify-center items-center">
        <img src="" alt="" srcSet="src\assets\login.jpg" className="w-full h-full object-cover" />
      </header>
      <article className=" w-1/3 flex flex-col justify-center items-center px-12 bg-gray-50">
        <h2 className=" text-lg">
          <strong className=" text-3xl"> Join Our Community!</strong>
          <br />
          <br />
          Get more features and priviliges by joining to the most helpful community
        </h2>

        <RegisterInput register={onRegister} />

      </article>
    </section>
  );
}

export default RegisterPage;
