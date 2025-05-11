import React from "react";

const Button = ({ customStyles, children }) => {
  return (
    <>
      <button
        className={`${customStyles} text-white font-primary font-bold bg-primary text-nowrap tracking-widest rounded-sm`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
