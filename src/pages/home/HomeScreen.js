import React from "react";
import CardComponet from "../../components/CardComponet";
import RowComponent from "../../components/RowComponent";
import NavComponent from "../../components/NavComponent";
import BannerComponent from "../../components/BannerComponent";
import FooterComponent from "../../components/FooterComponent";

// icon
import { HiOutlineTicket, HiUserCircle, HiShoppingCart } from "react-icons/hi";
import { PiArmchairLight, PiCurrencyDollarFill } from "react-icons/pi";
import { GoChecklist } from "react-icons/go";

function HomeScreen() {
  return (
    <div>
      <NavComponent />
      <div className="flex justify-center">
        <div className="container">
          <BannerComponent />
          <RowComponent title="NOW SHOWING IN CINEMA" />

          <div className="my-8">
            <p className="text-center font-bold text-3xl mt-8">
              STEP BUYING TICKET
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-8">
              <div className="flex flex-col items-center bg-white p-4 rounded-xl drop-shadow w-full h-full">
                <div className="bg-[#dc4b6e] rounded-full p-5 text-white">
                  <HiUserCircle className="text-[50px]" />
                </div>
                <p className="mt-5 text-3xl font-bold">1.REGISTRATION</p>
                <p className="text-center my-1 lg:text-base">
                  Create your account to buy ticket. Use your active email to
                  register
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl drop-shadow w-full h-full">
                <div className="bg-[#ff966c] rounded-full p-5 text-white">
                  <HiOutlineTicket className="text-[50px]" />
                </div>
                <p className="mt-5 text-3xl font-bold">2.Choose Ticket</p>
                <p className="text-center my-1 lg:text-base">
                  Choose Movie that you want to watch with release date already
                  pass
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl drop-shadow w-full h-full">
                <div className="bg-[#39a470] rounded-full p-5 text-white">
                  <PiArmchairLight className="text-[50px]" />
                </div>
                <p className="mt-5 text-3xl font-bold">3.Choose Seat</p>
                <p className="text-center my-1 lg:text-base">
                  Choose seat that you want to seat when watch movie. Choose
                  available seat
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl drop-shadow w-full h-full">
                <div className="bg-[#ffbb37] rounded-full p-5 text-white">
                  <HiShoppingCart className="text-[50px]" />
                </div>
                <p className="mt-5 text-3xl font-bold">4.Check Out</p>
                <p className="text-center my-1 lg:text-base">
                  Check out ticket and than go to payment
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl drop-shadow w-full h-full">
                <div className="bg-[#4ab6d8] rounded-full p-5 text-white">
                  <PiCurrencyDollarFill className="text-[50px]" />
                </div>
                <p className="mt-5 text-3xl font-bold">5.Pay Ticket</p>
                <p className="text-center my-1 lg:text-base">
                  Pay ticket with wallet. Only payment with wallet can buy
                  ticket
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-xl drop-shadow w-full h-full">
                <div className="bg-[#9559c5] rounded-full p-5 text-white">
                  <GoChecklist className="text-[50px]" />
                </div>
                <p className="mt-5 text-3xl font-bold">6.Ticket Receive</p>
                <p className="text-center my-1 lg:text-base">
                  Ticket will send into your email. Check your email evenly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomeScreen;
