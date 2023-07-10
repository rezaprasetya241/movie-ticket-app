import React, { useEffect, useState } from "react";
import CardComponet from "./CardComponet";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";

// const responsiveSettings = [
//   {
//     breakpoint: 800,
//     settings: {
//       slidesToShow: 5,
//       slidesToScroll: 2,
//     },
//   },
//   {
//     breakpoint: 500,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 2,
//     },
//   },
// ];

function RowComponent(props) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  async function fetcMovies() {
    try {
      await axios.get("http://localhost:8080/api/v1/movies").then((res) => {
        setMovies(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetcMovies();
  }, []);
  return (
    <div className="mt-8">
      <h2 className="font-bold text-lg mb-8 text-center">{props.title}</h2>
      <div className="flex overflow-x-hidden py-2">
        {movies.slice(0, 6).map((data, index) => (
          <div className="mx-4" key={index}>
            <CardComponet
              id={data.id}
              title={data.title}
              age_rating={data.age_rating}
              description={data.description}
              ticket_price={data.ticket_price}
              release_date={data.release_date}
              poster_url={data.poster_url}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button
          className="text-center text-secondary border-2 border-secondary hover:bg-secondary hover:text-white rounded-md p-4 py-3 ease-in duration-300"
          onClick={() => {
            navigate("/movies");
          }}
        >
          SHOW MORE
        </button>
      </div>
    </div>
  );
}

export default RowComponent;
