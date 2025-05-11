import React from "react";
import Link from "next/link";

const SourceLink = () => {
  return (
    <>
      <div className="flex justify-center gap-x-1 mt-5 text-center text-white">
        <span>Image from</span>
        <Link
          href="https://freepik.com"
          className="underline underline-offset-4"
        >
          {" "}
          Freepik
        </Link>
      </div>
    </>
  );
};

export default SourceLink;
