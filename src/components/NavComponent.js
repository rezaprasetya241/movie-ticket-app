import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

import SearchIcon from "../assets/icon/Search.png";
import Search from "../assets/icon/Search";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function NavComponent() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // const [isUser, setIsUser] = useState(false);
  // const [user, setUser] = useState({});
  // const checkLogin = () => {
  //   const isLogin = localStorage.getItem("user");
  //   if (isLogin) {
  //     setIsUser(true);
  //     setUser(JSON.parse(isLogin));
  //   } else {
  //     setIsUser(false);
  //   }
  // };
  // useEffect(() => {
  //   checkLogin();
  // }, [isUser]);
  return (
    <div className="bg-primary py-3 mx-auto w-full">
      <div className="over-container">
        <div className="flex items-center justify-between">
          <img
            className="w-[100%] max-w-[90px] md:max-w-[140px]"
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          {/* <div>
            <form className="flex items-center">
              <input
                className="lg:w-[500px] md:w-[280px] w-[150px] rounded-l-lg px-2 py-1 focus:outline-none"
                type="text"
                placeholder="Search Movie"
              />
              <button className="bg-secondary h-8 rounded-r-lg px-3">
                <svg
                  className="w-4 "
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </button>
            </form>
          </div> */}
          <div>
            {/* <button className="text-white mt-2 md:hidden ml-2">
              <FaBars className="h-5 w-5" />
            </button> */}
            <ul className="md:flex items-center text-white">
              {user ? (
                <>
                  <li
                    className="flex items-center"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    <img
                      className="rounded-full w-8 h-8"
                      src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
                      alt="user"
                    />
                    <p className="ml-2">{user.username}</p>
                  </li>
                </>
              ) : (
                <>
                  <li className="mr-2 font-medium">
                    <button
                      className="mr-2 border-2 border-solid px-2 py-2 rounded-lg hover:bg-secondary hover:border-secondary transition duration-150 ease-out md:ease-in text-xs md:text-base"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      REGISTER
                    </button>
                    <button
                      className="mr-2 border-2 border-solid border-secondary  bg-secondary px-2 py-2 rounded-lg transition duration-150 ease-out md:ease-in text-xs md:text-base"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      LOGIN
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavComponent;
