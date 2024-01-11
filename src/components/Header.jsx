/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RoundBtn from "./RoundBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img src="/Logo_Header.svg" />

      <div className="font-axiforma space-x-[44px]">
        <LinkNav name="Course" />
        <LinkNav name="About us" />
        <LinkNav name="Teachers" />
        <LinkNav name="Pricing" />
        <LinkNav name="Careers" />
        <LinkNav name="Blog" />
      </div>

      <RoundBtn isBgPurple={false}/>
    </header>
  );
};

export default Header;

function LinkNav(prop) {
  return (
    <a href="#" className={"text-[14px] font-light text-gray"}>
      {prop.name}
    </a>
  );
}

