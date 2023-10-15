import React, { useState } from "react";
import slideBg from "../assest/slide_bg.png";
import device from "../assest/device.png";
import { GoDotFill } from "react-icons/go";
import Menu from "./Menu";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t, i18n } = useTranslation();
  const slides = [
    {
      url: slideBg,
      img: device,
      title: t("sliderText_1.title"),
      sub_title: t("sliderText_1.subText"),
      btn_text: t("sliderText_1.btnText"),
    },
    {
      url: slideBg,
      img: device,
      title: t("sliderText_2.title"),
      sub_title: t("sliderText_2.subText"),
      btn_text: t("sliderText_2.btnText"),
    },
    {
      url: slideBg,
      img: device,
      title: t("sliderText_3.title"),
      sub_title: t("sliderText_3.subText"),
      btn_text: t("sliderText_3.btnText"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="w-full mx-auto relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="px-1 bg-center bg-cover duration-500 "
      >
        <div className="container">
          <Menu />
          <div className="flex flex-col py-20 md:flex-row space-y-8 justify-between items-center">
            <div className="text-center md:text-left md:pl-16">
              <p className="text-4xl md:text-[40px] text-[#373737] efx__fadeIn">
                {slides[currentIndex].title}
              </p>
              <h1 className="text-5xl md:text-7xl text-[#373737] font-bold efx__fadeIn mb-8">
                {slides[currentIndex].sub_title}
              </h1>
              <button className="border-[2px] border-[#373737] bg-transparent rounded-3xl py-3 px-6 font-semibold hover:bg-[#373737] hover:text-white transition duration-300 text-[#373737] efx__fadeIn">
                {slides[currentIndex].btn_text}
              </button>
            </div>

            <img
              className="w-[150px] md:w-[450px] efx__fadeInRight"
              src={device}
              alt="device"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8 mb-16">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {slideIndex === currentIndex ? (
              <GoDotFill className="text-[#FFB900]" />
            ) : (
              <GoDotFill className="text-[#6D5821]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
