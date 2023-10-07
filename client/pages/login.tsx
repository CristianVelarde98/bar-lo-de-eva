import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

export default function LoginComponent() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const loginHandler = (event: any) => {
    if (event.target.id === 'password') {
      setLoginData({ ...loginData, password: event.target.value });
    }
    if (event.target.id === 'username') {
      setLoginData({ ...loginData, username: event.target.value });
    }
  };

  const submitLogin = async (event: any) => {
    event.preventDefault();
    try {
      if (loginData.password.length >= 8 && loginData.username) {
        const senData = await axios.post(
          'http://localhost:3100/api/v2/auth/signIn/',
          {
            user: loginData.username,
            password: loginData.password,
          },
          {
            withCredentials: true,
          }
        );
        if (senData.data.authenticate) {
          Router.push('/dashboard');
        }
      }
    } catch (error: any) {
      setErrorMessage(error.response.data);
      // console.error(error.response.data);
    }
  };

  return (
    <section className='w-screen h-screen bg-black flex flex-col items-center justify-around'>
      <span className='w-[15vh] h-[15vh] overflow-hidden bg-white items-center flex justify-center rounded-full'>
        <Image
          src='/logo/evaLogoNegro1.webp'
          width={70}
          height={70}
          alt='Lo de Eva Logo'
        />
      </span>

      <div className='w-[50vh] h-[50vh] border-white border-4'>
        <div className='w-full h-1/6 flex items-center justify-center'>
          <span className='font-revolution text-4xl text-white tracking-widest'>
            Login
          </span>
        </div>
        <div className='w-full h-5/6 items-start justify-center flex text-white text-center text-lg'>
          <form className='flex flex-col w-full h-full items-center justify-center'>
            <label
              htmlFor='username'
              className='flex flex-col items-center justify-center'
            >
              Usuario <br />
              <input
                type='text'
                id='username'
                className='focus:outline-none focus:ring-2 focus:ring-red-500 text-black'
                onChange={loginHandler}
              />
              {/* <div className='text-red-500 text-sm m-2 w-1/2'>
                Usuario no valido
              </div> */}
            </label>
            <label
              htmlFor='password'
              className='flex flex-col items-center justify-center'
            >
              Contraseña <br />
              <input
                type='password'
                id='password'
                className='focus:outline-none text-black focus:ring-2 focus:ring-red-500'
                onChange={loginHandler}
              />
              <div className='text-red-500 text-sm m-2 w-1/2'>
                {errorMessage}
              </div>
            </label>
            <button
              type='submit'
              className='border-2 border-white w-1/2'
              onClick={submitLogin}
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
