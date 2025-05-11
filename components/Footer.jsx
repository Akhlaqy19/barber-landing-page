"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import WorkingHours from "./WorkingHours";
import ContactBtn from "./ContactBtn";
import { SocialIcon } from "react-social-icons";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="main-container py-8 px-4 text-white bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 mid:grid-cols-3 lg:grid-cols-3 gap-6 pb-8 border-b border-b-primary border-dashed">
        <div className="flex flex-col items-center gap-y-8 text-center">
          <Image
            src="/images/footer-logo.jpg"
            alt="Barber shop logo"
            width={400}
            height={180}
            onMouseDown={(e) => e.preventDefault()}
          />

          <p className="max-w-xs md:max-w-sm">
            Full service barber shops & men's grooming in Manhattan, New York.
            Logo from&nbsp;
            <Link
              href="https://freepik.com"
              className="underline underline-offset-4"
            >
              Freepik
            </Link>
          </p>

          <WorkingHours />
        </div>
        <div className="py-4 text-center space-y-8">
          <h5 className="text-2xl font-bold">Location</h5>
          <p className="flex flex-col text-xl">
            <span>17 Green St, New York,</span>
            <span>NY 10002, USA</span>
          </p>
          <p className="flex flex-col text-xl font-bold text-primary">
            <span>support@barbershop.com</span>
            <span>+1 (800) 123 456 789</span>
          </p>
          <div className="">
            <SocialIcon
              url="facebook.com"
              bgColor="none"
              fgColor="#d3ca6d"
            ></SocialIcon>
            <SocialIcon
              url="x.com"
              bgColor="none"
              fgColor="#d3ca6d"
            ></SocialIcon>
            <SocialIcon
              url="instagram.com"
              bgColor="none"
              fgColor="#d3ca6d"
            ></SocialIcon>
          </div>
        </div>
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <IoLogoWhatsapp size={50} color="green" />
          </div>
          <h5 className="text-2xl font-bold">Questions?</h5>
          <p className="flex flex-col text-xl">
            <span>Add us on WhatsApp & send</span>
            <span>queries for instant reply.</span>
          </p>

          <ContactBtn customStyles="py-4 px-6">+12-345-678-89089</ContactBtn>
        </div>
      </div>

      <p className="flex justify-center text-sm md:text-base pt-8">
        Sample text. Click to select the Text Element
      </p>
    </footer>
  );
};

export default Footer;
