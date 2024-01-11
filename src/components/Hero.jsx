import React from "react";
import RoundBtn from "./RoundBtn";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-[38px] mt-[36px]">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;

const HeroLeft = () => {
  return (
    <div>
      <h1 className="text-[56px] font-light">
        A <span className="font-medium text-primary">unique</span> approach to
        learning foreign languages online
      </h1>
      <p className="mt-[18px] mb-[32px] text-gray text-[18px] font-light">
        Learn at your own pace, with lifetime access on mobile and desktop
      </p>
      <RoundBtn isBgPurple={true} />
    </div>
  );
};

const HeroRight = () => {
  return (
    <div>
      <img src="/hero_Image.svg" />
    </div>
  );
};
