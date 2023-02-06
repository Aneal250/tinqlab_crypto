import React from "react";
import Avatar from "./imgs/Avatar.png";
import Notification from "./imgs/notification.png";
import Wrapper from "./Wrapper";

const Navigation = () => {
  return (
    <Wrapper>
      {/* input Section */}
      <div className="w-5/6">
        <input placeholder="Search" type="text" className="input" />
      </div>

      {/* Icons section */}
      <div className=" flex ml-10 items-center">
        <div className="mx-4">
          <img src={Avatar} alt="image" />
        </div>
        <div className="mx-4">
          <img src={Notification} alt="image" />
        </div>
        <div className="flex row text-white">
          <div>
            <p className="mx-4">English</p>
          </div>
          <div>
            <p>USD</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navigation;
