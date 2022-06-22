import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../services/api";
import * as auth from "./authSlice";
import { useEffect } from "react";

export default function Login() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    errors_list: "",
  });

  const handleInput = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    setLogin({ ...loginInput, [key]: val });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    try {
      const response = await api.login(data);
      if (response) {
        dispatch(auth.actions.login(response.data));
        toast.success(response.data.message);
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("auth_name", response.data.username);
        localStorage.setItem("link_avt", response.data.link_avt);
        history.push("/task");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const redirect = () => {
    if (isLogin === true) {
      history.push("/task");
    }
  };
  useEffect(() => {
    redirect();
  }, []);
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={loginSubmit}>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => handleInput(e)}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
                <span
                  className="py-5 px-6 mb-4 text-base text-red-700"
                  role="alert"
                >
                  {loginInput.errors_list.email}
                </span>
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => handleInput(e)}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
                <span
                  className="py-5 px-6 mb-4 text-base text-red-700"
                  role="alert"
                >
                  {loginInput.errors_list.password}
                </span>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
