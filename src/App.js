import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import HomeScreen from "./pages/home/HomeScreen";
import MoviesScreen from "./pages/Movies/MoviesScreen";
import MoreMoviesScreen from "./pages/MoreMovies/MoreMoviesScreen";
import ProfileScreen from "./pages/Profile/ProfileScreen";
import SeatsScreen from "./pages/Seats/SeatsScreen";
import { useEffect } from "react";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import InforScreen from "./pages/Booking/InforScreen";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isLogin = () => {
      const check = localStorage?.getItem("user");
      if (check) {
        dispatch(login(JSON.parse(check)));
      }
    };
    return isLogin;
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route path="/seats" element={<SeatsScreen />}></Route>
          <Route path="/movies" element={<MoreMoviesScreen />}></Route>
          <Route path="/movies/:id" element={<MoviesScreen />}></Route>
          <Route path="/booking" element={<InforScreen />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/register" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
