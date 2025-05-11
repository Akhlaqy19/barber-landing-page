import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <>
      <div className={`mx-auto max-w-xl md:max-w-2xl text-center text-white`}>
        <h2 className={`text-4xl md:text-5xl font-bold`}>{children}</h2>
      </div>
    </>
  );
};

export default SectionTitle;
