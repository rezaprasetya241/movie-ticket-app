import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";

function Signin() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [cookies, setCookies] = useCookies(["user"]);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await axios
        .post("http://localhost:8080/api/v1/users/login", formLogin)
        .then((res) => {
          setCookies("token", res.data.token, { path: "/" });
          // cookie.set("access-token", res.data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: res.data.email,
              username: res.data.username,
              age: res.data.age,
              role: res.data.role,
              balance: res.data.balance,
            })
          );
          dispatch(
            login({
              email: res.data.email,
              username: res.data.username,
              age: res.data.age,
              role: res.data.role,
              balance: res.data.balance,
            })
          );

          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  }
  const navigate = useNavigate();
  return (
    <div className="bg-backgroundPage h-[100vh] flex flex-col items-center ">
      {/* <h1 className="text-primary text-center text-4xl font-bold">
        NONTON.COM
      </h1> */}
      <img
        className="max-w-xs h-[150px]"
        src={Logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className=" container mx-auto justify-center items-center flex">
        <div className="bg-white p-4 py-8 rounded-xl max-w-md w-[100%]">
          <h2 className="text-center font-bold text-3xl">LOGIN</h2>
          {/* <div className="text-center">
            <span>Already have account?</span>
            <span className="hover:underline underline-offset-2 hover:text-secondary">
              {" "}
              login
            </span>
          </div> */}
          <div>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="text-gray mb-1">E-Mail Address</p>
                <input
                  className="p-2 rounded-xl w-[100%]  border-solid border-2 border-gray focus:outline-none focus:border-primary"
                  type="email"
                  placeholder="Email address"
                  value={formLogin.email}
                  onChange={(e) =>
                    setFormLogin({ ...formLogin, email: e.target.value })
                  }
                />
              </div>
              <div>
                <p className="text-gray mb-1">Password</p>
                <input
                  className="p-2 rounded-xl w-[100%]  border-solid border-2 border-gray focus:outline-none focus:border-primary"
                  type="password"
                  placeholder="Password"
                  value={formLogin.password}
                  onChange={(e) =>
                    setFormLogin({ ...formLogin, password: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end mt-2">
                <span className="hover:text-secondary text-end hover:underline underline-offset-2">
                  Forgot Password?
                </span>
              </div>
              <div className="flex items-center justify-start ml-1 mt-4">
                <input type="checkbox" />
                <label className="ml-3">
                  Remember me and keep me logged in
                </label>
              </div>
              {/* <button
                className="bg-secondary border-none text-white w-[100%] rounded-lg py-3 mt-5 font-semibold"
                onClick={() => {
                  navigate("/register");
                }}
              >
                REGISTER
              </button> */}
              <button
                className="bg-secondary border-none text-white w-[100%] rounded-lg py-3 mt-5 font-semibold"
                type="submit"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
