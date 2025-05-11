import React from "react";
import ContactBtn from "./ContactBtn";
import SourceLink from "./SourceLink";

const Hero = () => {
  return (
    <section className="main-container hero-bg z-10 center flex-col w-full min-h-screen text-white">
      {/* wrapper */}

      <div className="flex flex-col items-center gap-y-5 max-w-1/3 text-center">
        {/* font-bold */}
        <h2 className="min-w-max text-5xl sm:text-6xl md:text-8xl font-semibold font-primary uppercase">
          About us
        </h2>
        <p className="text-xl min-w-sm md:min-w-xl">
          We build our passion for the art of barbering through our commitment
          to our customers.
        </p>

        <ContactBtn customStyles="py-3.5 px-8 uppercase text-nowrap">
          Book AN APPOINTMENT
        </ContactBtn>
      </div>

      {/* source link */}
      <SourceLink />
    </section>
  );
};

export default Hero;
