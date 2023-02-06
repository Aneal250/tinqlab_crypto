import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="bg-dark">
      <div className="mx-auto px-2 py-8 flex justify-between w-[1280px] ">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
