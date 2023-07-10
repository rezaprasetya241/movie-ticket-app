import React, { useEffect, useState } from "react";
import NavComponent from "../../components/NavComponent";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent";

// icon
import { MdDateRange } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import RowComponent from "../../components/RowComponent";
import { useDispatch } from "react-redux";
import { buyTicket } from "../../features/userSlice";

function MoviesScreen() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [movie, setMovies] = useState([]);
  const [ticket, setTicket] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  async function fetchDetailMovies() {
    await axios
      .get(`http://localhost:8080/api/v1/movies/${params.id}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const clickTicet = (type) => {
    if (type === "increment") {
      if (ticket >= 6) {
        return;
      } else {
        setTicket(ticket + 1);
      }
    } else {
      if (ticket <= 0) {
        return;
      } else {
        setTicket(ticket - 1);
      }
    }
  };
  const handleSubmit = async () => {
    await dispatch(
      buyTicket({
        ticket: ticket,
        total: totalPrice,
      })
    );
    navigate("/seats");
  };
  useEffect(() => {
    fetchDetailMovies();
  }, []);
  useEffect(() => {
    // if (totalPrice === NaN) {
    //   setTotalPrice(0);
    // }
    setTotalPrice(Number(ticket * movie?.ticket_price));
  }, [ticket]);
  return (
    <div>
      <NavComponent />
      <div className="flex justify-center">
        <div className="container">
          <div className="mt-5 md:flex">
            <img
              className="h-[300px] w-full lg:h-[500px] rounded-xl"
              src={movie.poster_url}
              alt={movie.title}
            />
            <div className="mt-5 md:mt-0 md:ml-4 p-4 rounded-xl md:drop-shadow-md bg-white">
              <p className="text-2xl font-semibold">
                {movie.title} <br />
              </p>
              <p>Age: {movie.age_rating}++</p>
              <div className="flex items-center">
                <MdDateRange className="w-4 h-4" />
                <p className="mt-1 ml-2">{movie.release_date}</p>
              </div>
              <div className="flex items-center">
                <AiFillDollarCircle />
                <p className="mt-1 ml-2">Rp. {movie.ticket_price}</p>
              </div>
              <div className="mt-3">
                <p className="font-bold">Description: </p>
                <p>{movie.description}</p>
              </div>
            </div>
          </div>
          <div className="my-8 border-dashed border-2 rounded-xl bg-white drop-shadow-md border-primary p-4">
            <p className="text-2xl font-bold">Tiket Movie {movie.title}</p>
            <p className="text-gray">Start on: {movie.release_date}</p>
            <div className="flex justify-between">
              <p className="text-xl">Ticket</p>
              <div>
                <button
                  className="bg-primary w-[30px] h-[30px] rounded-full text-xl text-white font-bold"
                  onClick={() => clickTicet("decrement")}
                >
                  -
                </button>
                <span className="mx-3">{ticket}</span>
                <button
                  className="bg-primary w-[30px] h-[30px] rounded-full text-xl text-white font-bold"
                  onClick={() => clickTicet("increment")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-xl font-bold">Total:</p>
              <p className="font-semibold">
                Rp {totalPrice ? totalPrice : "0"}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="py-3 bg-primary w-full rounded-md text-white"
              onClick={() => handleSubmit()}
            >
              BUY TICKET
            </button>
          </div>

          <div>
            <RowComponent title="Maybe you like" />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default MoviesScreen;
