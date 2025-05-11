"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import BarberBoxInfo from "./BarberBoxInfo";
import SourceLink from "./SourceLink";

const Barbers = () => {
  const [barbersInfo, setBarbersInfo] = useState([
    {
      id: 1,
      role: "Owner",
      fullName: "Fred Morison",
      srcImg: "owner.jpg",
    },
    {
      id: 2,
      role: "Barber / Stylist",
      fullName: "Adrian Scold",
      srcImg: "barber1.jpg",
    },
    {
      id: 3,
      role: "Barber / Stylist",
      fullName: "Elmer Briggs",
      srcImg: "barber2.jpg",
    },
    {
      id: 4,
      role: "Barber / Stylist",
      fullName: "James Oliver",
      srcImg: "barber3.jpg",
    },
    {
      id: 5,
      role: "Barber / Stylist",
      fullName: "Walter Lilly",
      srcImg: "barber4.jpg",
    },
    {
      id: 6,
      role: "Barber / Stylist",
      fullName: "Alex Green",
      srcImg: "barber5.jpg",
    },
  ]);

  return (
    <section className="main-container min-h-screen py-12 bg-gray-primary space-y-10">
      <div className="flex flex-col items-center text-center text-white space-y-3">
        <p className="max-w-xs md:max-w-max text-xl font-light uppercase">
          WE CAN MAKE YOUR AWESOMENESS
        </p>

        <SectionTitle>Super Professional Barbers</SectionTitle>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-3 
      lg:grid-cols-3 gap-3 my-4"
      >
        {barbersInfo.map((barber) => (
          <React.Fragment key={barber.id}>
            <BarberBoxInfo {...barber} />
          </React.Fragment>
        ))}
      </div>

      <SourceLink />
    </section>
  );
};

export default Barbers;
