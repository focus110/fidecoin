import React from "react";
import icon from "../assest/icon.png";
import { BsChevronDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="py-14 container text-center">
      <h4 className="text-4xl text-left md:text-6xl font-normal text-white mb-2 md:mb-6">
        {t("introText.text1")}
      </h4>
      <div className="flex mb-8">
        <img className="w-10 md:w-16 object-contain" src={icon} alt="icon" />
        <h4 className="text-left text-4xl md:text-6xl text-[#FACD48] font-normal">
          {t("introText.text2")}
        </h4>
      </div>
      <p className="text-left text-3xl md:text-5xl text-white mb-16 md:mb-28">
        {t("introText.text3").split(" ")[0]}{" "}
        {t("introText.text3").split(" ")[1]}{" "}
        <span className="text-[#FACD48]">
          {t("introText.text3").split(" ")[2]}
        </span>{" "}
        {t("introText.text3").split(" ")[3]}{" "}
        {t("introText.text3").split(" ")[4]}{" "}
        {t("introText.text3").split(" ")[5]}{" "}
        <span className="text-[#FACD48]">
          <br />
          {t("introText.text3").split(" ")[6]}
        </span>
      </p>

      <button className="">
        <BsChevronDown className="w-12 md:w-14 h-12 md:h-14 text-[#FACD46]" />
      </button>
    </div>
  );
};

export default Introduction;
