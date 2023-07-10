import React, { useEffect, useState } from "react";
import NavComponent from "../../components/NavComponent";
import axios from "axios";
import CardComponet from "../../components/CardComponet";
import FooterComponent from "../../components/FooterComponent";

function MoreMoviesScreen() {
  const [listMovie, setListMovie] = useState([]);
  async function fetcMovies() {
    await axios.get("http://localhost:8080/api/v1/movies").then((res) => {
      setListMovie(res.data);
    });
  }
  useEffect(() => {
    fetcMovies();
  }, []);
  return (
    <div>
      <NavComponent />
      <div className="flex justify-center my-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
            {listMovie.map((data, index) => (
              <div key={index}>
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
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default MoreMoviesScreen;
