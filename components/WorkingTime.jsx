"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../components/SectionTitle";
import WorkingHours from "./WorkingHours";
import LeftImg from "../public/images/working-time-sec-img.jpg";

const WorkingTime = () => {
  return (
    <>
      <section className="w-full min-h-screen pt-10 pb-14 bg-stone-900">
        {/* wrapper */}
        <div className="main-container mx-auto text-white">
          {/* title */}
          <SectionTitle>
            Welcome to the Best Barbershop in Manhattan
          </SectionTitle>

          {/* wrapper of left and right section */}
          <div className="flex flex-col md:flex-row py-10">
            {/* left */}
            <div className="flex-1 w-full md:w-1/2">
              <Image
                src={LeftImg}
                alt="Barber image in working time section"
                width="auto"
                height="auto"
                onMouseDown={(e) => e.preventDefault()}
                className="mid:h-9/10 object-cover aspect-auto"
              />
            </div>
            {/* right */}
            <div className="flex flex-col flex-1 px-6">
              <div className="flex flex-col gap-y-5 pt-6 pb-10 line-title after:w-28">
                <span className="text-primary text-2xl font-bold">
                  +90 123 456 32 11
                </span>
                <h3 className="text-5xl capitalize">Working Hours</h3>
              </div>
              <div className="flex flex-col gap-y-8 py-6">
                <WorkingHours />
                <div className="">
                  <p className="line-title after:w-full py-6">
                    Comprehensive Barber Services * VIP Packages * Unique
                    Grooming Product * Juniper * Crafted Cocktails *
                    Visa/MasterCard/Amex. Images from&nbsp;
                    <Link
                      href="https://freepik.com"
                      className=" text-primary underline underline-offset-4"
                    >
                      Freepik
                    </Link>
                  </p>
                  <p className="py-8">
                    Sample text. Click to select the Text Element.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingTime;
