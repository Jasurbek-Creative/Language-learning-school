import React from "react";

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

      <HeaderBtn />
    </header>
  );
};

export default Header;

function LinkNav(prop) {
  return (
    <a href="#" className="text-[14px] font-light text-[#666680]">
      {prop.name}
    </a>
  );
}

function HeaderBtn() {
  return (
    <button className="text-primary bg-white  rounded-full px-[32px] py-[12px] text-[14px] font-bold">
      Get Started
    </button>
  );
}
