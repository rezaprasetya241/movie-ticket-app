import React from "react";
import { useNavigate } from "react-router-dom";

function CardComponet(props) {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-[250px] bg-white rounded-xl drop-shadow-md cursor-pointer"
      onClick={() => {
        navigate(`/movies/${props.id}`);
      }}
    >
      <img
        className="w-[100%] h-[200px] object-fill rounded-t-xl"
        src={props.poster_url}
        alt="movie"
      />
      <div className="text-base px-4 py-6">
        <div className=" mb-4">
          <p className="truncate">{props.title}</p>
          <p className="text-xs text-gray ">Age-rating: {props.age_rating}</p>
        </div>
        <p className="truncate text-xs">{props.description}</p>
        <p className="text-gray text-xs">{props.release_date}</p>
        <p className="font-bold mt-4">Rp {props.ticket_price}</p>
      </div>
    </div>
  );
}

export default CardComponet;
