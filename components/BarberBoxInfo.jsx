"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

const BarberBoxInfo = ({ role, fullName, srcImg }) => {
  return (
    <>
      <div className="p-8 h-130 bg-white">
        <div className="w-full h-80">
          <Image
            src={`/images/barbers-img/${srcImg}`}
            alt="Barber portrait image"
            width={320}
            height={320}
            onMouseDown={(e) => e.preventDefault()}
            className="w-full h-full object-cover bg-no-repeat"
          />
        </div>

        <div className="mt-4 space-y-4 font-bold uppercase">
          <p className="text-primary text-xl">{role}</p>
          <h3 className="text-black text-2xl">{fullName}</h3>
        </div>

        <div className="relative flex gap-x-[-4px] top-3 -left-4">
          <div className="">
            <SocialIcon
              url="facebook.com"
              bgColor="none"
              fgColor="#d3ca6d"
            ></SocialIcon>
          </div>
          <div className="">
            <SocialIcon
              url="instagram.com"
              bgColor="none"
              fgColor="#d3ca6d"
            ></SocialIcon>
          </div>
          <div className="">
            <SocialIcon
              url="linkedin.com"
              bgColor="none"
              fgColor="#d3ca6d"
            ></SocialIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarberBoxInfo;
