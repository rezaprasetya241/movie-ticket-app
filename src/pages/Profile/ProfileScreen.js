import React from "react";
import FooterComponent from "../../components/FooterComponent";
import NavComponent from "../../components/NavComponent";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const []

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <NavComponent />
      <div className="flex justify-center">
        <div className="container h-screen">
          <div className="bg-white py-2 my-8 px-8 drop-shadow-md">
            <div className="bg-white rounded-lg drop-shadow py-4 px-5 my-8">
              <h4 className="font-bold text-xl md:text-2xl">Profile Info</h4>
            </div>
            <div>
              <div className="bg-white py-4 rounded-lg my-8 flex items-center">
                <img
                  className="rounded-full w-[70px] md:w-[100px] md:h-[100px]"
                  src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
                  alt="user"
                />
                <div className="ml-8">
                  <p className="text-xl md:text-2xl font-semibold">
                    {user?.username}
                  </p>
                  <p className="text-base">{user?.email}</p>
                  <p className="text-xs">Age: {user?.age} years old</p>
                  <div>
                    <p className="font-bold text-lg">Balance:</p>
                    <p className="text-primary">Rp {user?.balance}</p>
                  </div>
                  {localStorage.getItem("user") ? (
                    <button
                      className="bg-secondary text-white px-3 py-2 rounded-md"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default ProfileScreen;
