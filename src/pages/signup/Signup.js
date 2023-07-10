import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    email: "",
    username: "",
    password: "",
    age: 0,
    role: "user",
  });

  async function registerUser(e) {
    try {
      e.preventDefault();
      await axios
        .post("http://localhost:8080/api/v1/users/register", formRegister)
        .then((res) => {
          console.log(res?.data?.message);
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-backgroundPage h-[100vh] flex flex-col items-center ">
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
          <h2 className="text-center font-bold text-3xl">REGISTER</h2>
          <div>
            <form className="mt-5" onSubmit={registerUser}>
              <div className="mb-4">
                <p className="text-gray mb-1">E-Mail Address</p>
                <input
                  className="p-2 rounded-xl w-[100%] border-solid border-2 border-gray focus:outline-none focus:border-primary "
                  type="email"
                  placeholder="Email address"
                  value={formRegister.email}
                  onChange={(e) =>
                    setFormRegister({ ...formRegister, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <p className="text-gray mb-1">Name</p>
                <input
                  className="p-2 rounded-xl w-[100%] border-solid border-2 border-gray focus:outline-none focus:border-primary"
                  type="text"
                  placeholder="Name"
                  value={formRegister.username}
                  onChange={(e) =>
                    setFormRegister({
                      ...formRegister,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <p className="text-gray mb-1">Age</p>
                <input
                  className="p-2 rounded-xl border-solid border-2 border-gray focus:outline-none focus:border-primary"
                  type="number"
                  placeholder="Age"
                  value={formRegister.age}
                  onChange={(e) =>
                    setFormRegister({ ...formRegister, age: e.target.value })
                  }
                />
              </div>
              <div>
                <p className="text-gray mb-1">Password</p>
                <input
                  className="p-2 rounded-xl w-[100%] border-solid border-2 border-gray focus:outline-none focus:border-primary"
                  type="password"
                  placeholder="Password"
                  value={formRegister.password}
                  onChange={(e) =>
                    setFormRegister({
                      ...formRegister,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end mt-2">
                <span
                  className="text-black hover:text-secondary text-end hover:underline underline-offset-2 cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Already have account?
                </span>
              </div>
              <button
                className="bg-secondary border-none text-white w-[100%] rounded-lg py-3 mt-5"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
