import React from "react";

const Button = ({ button, className }) => {
  return <button className={`py-2 px-4 rounded ${className}`}>{button} </button>;
};

export default Button;
