import React from "react";
import { useSelector } from "react-redux";
import { ticketBuy } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function InforScreen() {
  const ticket = useSelector(ticketBuy);
  const navigate = useNavigate();

  let listInfo = [];
  for (let i = 0; i < parseInt(ticket?.ticket); i++) {
    listInfo.push(
      <div className="mt-5 bg-white px-3 py-4">
        <p className="text-2xl font-semibold">Order {i + 1}</p>
        <div className="mt-2 flex flex-col">
          <label>Name :</label>
          <input
            className="p-2 mt-1 bg-slate-100 rounded-lg"
            type="text"
            placeholder="Input your name"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label>Age :</label>
          <input
            className="p-2 mt-1 bg-slate-100 rounded-lg"
            type="number"
            placeholder="Input your age"
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="container">
          <p className="text-3xl font-semibold mt-5">Information Order</p>
          <div>{listInfo}</div>
          <div className="flex justify-between mt-5">
            <button
              className="bg-slate-300 px-3 py-2 w-full mr-2 rounded-md"
              onClick={() => {
                navigate(-1);
              }}
            >
              Previous
            </button>
            <button className="bg-secondary px-3 py-2 w-full ml-2 rounded-md text-white">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforScreen;
