import React from "react";
import mobileDevice from "../assest/device2.png";
import whatsapp from "../assest/whatsapp.png";
import toolTip from "../assest/tips.png";
import img1 from "../assest/img1.png";
import img2 from "../assest/img2.png";
import img3 from "../assest/img3.png";
import img4 from "../assest/img4.png";
import { useTranslation } from "react-i18next";

const Whatsapp = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="container pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-16">
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
            {t("whatsappText.text1")}
            </p>
            <img className="w-8 mb-4" src={img1} alt="mobile phone" />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
            {t("whatsappText.text2")} 
            </p>
            <img className="w-8 mb-4" src={img2} alt="mobile phone" />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
            {t("whatsappText.text3")} 
            </p>
            <img className="w-8 mb-4" src={img3} alt="mobile phone" />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
            {t("whatsappText.text4")} 
            </p>
            <img className="w-8 mb-4" src={img4} alt="mobile phone" />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-8 md:mb-4">
            {t("whatsappText.text5")}  
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <img className="w-64" src={mobileDevice} alt="mobile phone" />
          </div>
          <div className="md:w-[30%] text-center">
            <h4 className="text-3xl md:text-5xl text-[#FACD46] mb-4 text-left">
            {t("whatsappText.text6")}   <br />
            {t("whatsappText.text7")}  
            </h4>
            <div className="relative flex items-center space-x-4 mb-20">
              <img className="w-12" src={whatsapp} alt="mobile phone" />
              <p className="text-3xl md:text-5xl text-white">{t("whatsappText.text8")} </p>
              <img
                className="absolute md:left-24 left-8 -bottom-11 w-36"
                src={toolTip}
                alt="mobile phone"
              />
            </div>

            <p className="text-3xl md:text-5xl text-[#FACD46] text-center mb-8">
            {t("whatsappText.text9")} 
            </p>
            <button className="mt-2 bg-[#FACD46] hover:bg-transparent border-[2px] border-[#FACD46] transition duration-300 hover:text-[#FACD46] text-xl rounded-3xl py-3 px-6 w-full md:w-64">
            {t("btnText")} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
