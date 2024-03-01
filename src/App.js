import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import CenterChildren from "./components/CenterChildren";
import TeachersSection from "./components/TeachersSection";

const App = () => {
  return (
    <CenterChildren>
      <div className="font-axiforma bg-[#F7E0DA] pt-[40px] px-[68px] mt-[32px] rounded-[40px]">
        <Header />
        <Hero />
      </div>
      {/* <ValueSection /> */}
      <TeachersSection />
    </CenterChildren>
  )
};

export default App;
