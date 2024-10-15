import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import ErrorComponent from 'components/Login/ErrorComponent';
import { LoadingComponent } from 'components/Loading/Loading';
import { usePostPutMutation } from 'hooks/queries/usePostPutMutation';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { AuthContext } from 'store/authContext';
import Lottie from 'react-lottie';
import { defaultOptions } from 'components/Banners/WelcomeBanner';

export default function Login() {
  const history = useNavigate();
  const { setUserData, setIsAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    mutate: login,
    data,
    error,
    isLoading,
    isPending,
  } = usePostPutMutation('https://la-esperanza-backe-end.onrender.com/auth/login', {
    onSuccess: data => {
      setUserData(data?.access_token, data?.user);
      setIsAuth(true);
      history('/admin/dashboard');
    },
    onError: error => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = data => {
    login({ data });
  };

  return (
    <div className="container mx-auto mt-16 px-4 h-auto">
      <div className="flex lg:w-full content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/6 px-4 md:w-full">
          <div className="relative bg-color flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-900 text-center mb-3 font-normal">
                <small className="text-white">Start session with your credentials</small>
              </div>
              {error && <ErrorComponent message={error.message} />}
              {(isLoading || isPending) && <LoadingComponent />}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative w-full mb-1 flex-wrap px-2">
                  <label className="block uppercase text-white mb-0 text-sm font-semibold" htmlFor="username">
                    User
                  </label>
                  <input
                    id="username"
                    type="text"
                    {...register('userName', { required: 'Username is required' })}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.username ? 'border-red-500' : ''
                    }`}
                    placeholder="Usuario"
                  />
                  {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
                </div>
                <div className="relative w-full flex-wrap px-2">
                  <label className="block uppercase text-white mb-0 text-sm font-semibold" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    placeholder="Contraseña"
                  />
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-butomLogin text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Ingresando...' : 'Ingresar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <Lottie options={defaultOptions} height="150px" width="150px" />
          </div>
        </div>
      </div>
    </div>
  );
}
