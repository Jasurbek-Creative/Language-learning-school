import React from "react";
import Htwo from "./Htwo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ValueSection = () => {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      img: "/Play-Logo.png",
      title: "Speaking clubs",
      paragraph:
        "In our school you will practice your speaking skills and just get a lot of positive emotions!",
    },
    {
      id: uuidv4(),
      img: "/Glass Icons.png",
      title: "Quality control",
      paragraph:
        "A huge work has been done with the teachers and their work has been monitored thoroughly. ",
    },
    {
      id: uuidv4(),
      img: "/Note-icons.png",
      title: "Progress analysis",
      paragraph:
        "The CEF of Reference has been used at our school. It allows to control our students’ success in studying.",
    },
  ]);

  return (
    <section className="mx-[68px] mt-[200px]">
      <Htwo innerText={"Our values "} title={"WHY CHOOSE US"} />
      <div className="flex justify-between">
        {cards.map((event) => {
          return (
            <div key={event.id} className="card w-[289px]">
              <img src={event.img} alt={event.title} />
              <h2>{event.title}</h2>
              <p>{event.paragraph}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValueSection;
