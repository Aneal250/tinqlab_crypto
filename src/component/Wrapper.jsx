import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="bg-dark">
      <div className="mx-auto px-2 py-8 flex  md:flex-row flex-col justify-between w-5/6">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
