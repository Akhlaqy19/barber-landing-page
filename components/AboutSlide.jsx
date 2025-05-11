"use client";
import React from "react";

const AboutSlide = ({ year, info }) => {
  return (
    <>
      <div className="text-white space-y-6">
        <h3 className="text-left text-xl md:text-2xl mid: lg:text-5xl">
          {year}
        </h3>
        <p className="max-w-68 text-lg text-stone-600">{info}</p>
      </div>
    </>
  );
};

export default AboutSlide;
