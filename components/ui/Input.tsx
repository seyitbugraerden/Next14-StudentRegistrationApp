import React from "react";

const Input: React.FC<any> = ({ onChange }) => {
  return (
    <input
      type="text"
      className="border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent"
    />
  );
};

export default Input;
