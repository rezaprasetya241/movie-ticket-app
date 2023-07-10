import React, { useRef, useState } from "react";
import NavComponent from "../../components/NavComponent";

import { MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ticketBuy } from "../../features/userSlice";

function SeatsScreen() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const ticket = useSelector(ticketBuy);

  const [seatChoose, setSeatChoose] = useState([]);
  const [isSelect, setIsSelect] = useState({
    isSelected: false,
  });

  const listSeat = [
    {
      seat: "A1",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A2",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A3",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A4",
      isSelected: true,
      isEmpty: false,
    },
    {
      seat: "A5",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A2",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A3",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A4",
      isSelected: true,
      isEmpty: false,
    },
    {
      seat: "A5",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A2",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A3",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A4",
      isSelected: true,
      isEmpty: false,
    },
    {
      seat: "A5",
      isSelected: false,
      isEmpty: true,
    },
    {
      seat: "A4",
      isSelected: true,
      isEmpty: false,
    },
    {
      seat: "A5",
      isSelected: false,
      isEmpty: true,
    },
  ];

  const handleToggleClasslistRef = (ref, data) => {
    if (!ref.current) {
      return;
    } else if (ref.current.classList.contains("bg-secondary")) {
      return;
    } else if (!ref.current.classList.contains("bg-slate-500")) {
      if (seatChoose.length === ticket?.ticket) {
        return;
      } else if (!ticket?.ticket) {
        return;
      } else {
        ref.current.classList.remove("bg-slate-300");
        ref.current.classList.add("bg-slate-500");
        setSeatChoose((e) => [...e, data.seat]);
      }
    } else {
      ref.current.classList.remove("bg-slate-500");
      ref.current.classList.add("bg-slate-300");
      let filteredArray = seatChoose.filter((item) => item !== data.seat);
      setSeatChoose(filteredArray);
    }
  };
  return (
    <div>
      <NavComponent />
      <div className="flex justify-center">
        <div className="container">
          <div className="flex flex-col lg:flex-row md:justify-between lg:justify-between lg:bg-white p-4">
            <div className="flex flex-col md:flex-row">
              <div>
                <img
                  className="w-full h-[300px] md:h-[500px]  lg:h-[600px] rounded-xl"
                  src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
                  alt="movie"
                />
              </div>
              <div className="my-5 md:mt-0 rounded-xl md:ml-5 w-[300px]">
                <p className="text-2xl font-semibold">
                  Fast X <br />
                </p>
                <p>Age: 18++</p>
                <div className="flex items-center">
                  <MdDateRange className="w-4 h-4" />
                  <p className="mt-1 ml-2">Agustus 2023</p>
                </div>
                <div className="mt-3">
                  <p className="font-bold">Description: </p>
                  <p>
                    Dom Toretto dan keluarganya menjadi sasaran putra gembong
                    narkoba Hernan Reyes yang pendendam.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex flex-col items-center md:mt-5 lg:mt-0">
              <p className="text-2xl font-semibold">
                Select Seat : {ticket?.ticket ? ticket?.ticket : "0"} qty <br />
              </p>
              <div className="grid grid-cols-5 justify-center items-center w-full md:w-[300px] my-2">
                {listSeat.map((data, index) => {
                  return (
                    <div
                      className={
                        !data.isEmpty
                          ? "bg-secondary p-2 border border-solid border-black my-2 mx-1 rounded-t-xl text-center"
                          : "bg-slate-300 p-2 border border-solid border-black my-2 mx-1 rounded-t-xl cursor-pointer text-center"
                      }
                      key={index}
                      onClick={(e) => {
                        ref.current = e.target;
                        handleToggleClasslistRef(ref, data);
                      }}
                    >
                      {data.seat}
                    </div>
                  );
                })}
              </div>
              <div className="w-full md:w-[300px] bg-slate-300 h-[30px] text-center rounded-b-xl">
                Screen
              </div>
              <div className=" text-xs md:text-base w-full">
                <span>Note: </span>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-slate-500 mr-1 rounded-t-lg"></div>
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center md:mx-5">
                    <div className="w-5 h-5 bg-slate-300 mr-1 rounded-t-lg"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-secondary mr-1 rounded-t-lg"></div>
                    <span>Not available</span>
                  </div>
                </div>
              </div>
              <button
                className="bg-secondary text-white w-full py-3 my-5 rounded-lg "
                disabled={seatChoose.length === 0 || !ticket?.ticket}
                onClick={() => navigate("/booking")}
              >
                Booking now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatsScreen;
