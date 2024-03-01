import { leftIcon, rightIcon } from "../icons";
import Htwo from "./Htwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

const TeachersSection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="mt-[234px]">
      <div className="flex justify-between items-end">
        <Htwo innerText={"Meet our teachers"} title={"Key Persons"} />
        <div className="flex space-x-[30px] mb-[10px] ">
          <LeftOrRightBtn
            isRight={false}
            isDisable={false}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
          <LeftOrRightBtn
            isRight={true}
            isDisable={true}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </div>
      </div>
      <Carousel
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />
    </section>
  );
};

export default TeachersSection;

function LeftOrRightBtn(props) {
  return (
    <button
      ref={props.isRight ? props.navigationNextRef : props.navigationPrevRef}
      className={` ${
        props.isDisable
          ? "bg-primary"
          : "bg-transparent border border-[#E8E8F6]"
      } w-[56px] h-[56px] bg-primary flex justify-center items-center rounded-full`}
    >
      {props.isRight ? rightIcon : leftIcon}
    </button>
  );
}

const Carousel = (props) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      slidesPerGroup={3}
      loop={false}
      navigation={{
        prevEl: props.navigationPrevRef.current,
        nextEl: props.navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = props.navigationPrevRef.current;
        swiper.params.navigation.nextEl = props.navigationNextRef.current;
      }}
      modules={[Pagination, Navigation]}
      className=" mt-[60px]"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};
