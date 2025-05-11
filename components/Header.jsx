"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactBtn from "./ContactBtn";
import logo from "./../public/images/header-logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-40 fixed w-full min-h-22 bg-black text-white">
      <div className="flex justify-between items-center px-10">
        {/* landing logo image */}
        <div className="font-logo -translate-x-6 md:translate-0">
          <Image
            src={logo}
            alt="barber landing page logo"
            width={180}
            height={180}
            onMouseDown={(e) => e.preventDefault()}
          />
        </div>

        {/* navbar links */}
        <nav className="hidden mid:block ml-16">
          <ul className="flex gap-x-6 text-gray-300 text-lg *:w-max">
            <li>
              <Link className="navbar-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-link" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="navbar-link" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-link" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* booking button */}
        <div className="hidden md:block">
          <ContactBtn customStyles="py-2 px-5">Book an Appointment</ContactBtn>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <RxCross1
              size={40}
              onClick={() => {
                setIsMenuOpen(false);
                console.log("close menu");
              }}
            />
          ) : (
            <RxHamburgerMenu size={40} onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full bg-stone-950 p-10">
          <nav className="pl-10">
            <ul className="flex flex-col gap-y-6 text-white text-lg">
              <li>
                <Link href="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="navbar-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="navbar-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="navbar-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
