import React from "react";
import mobileDevice from "../assest/Phone.png";
import card from "../assest/card.png";
import img2 from "../assest/image_2.png";
import img3 from "../assest/image_3.png";
import img4 from "../assest/image_4.png";
import { useTranslation } from "react-i18next";

const FidaPay = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="container pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-8 mb-8">
          <div className="mb-8 md:mb-0">
            <img className="w-64" src={mobileDevice} alt="mobile phone" />
          </div>
          <div className="md:w-[30%]">
            <h4 className="text-2xl md:text-5xl text-white mb-8">
              {t("fidayPayText.text1").split(" ")[0]}{" "}
              {t("fidayPayText.text1").split(" ")[1]}{" "}
              {t("fidayPayText.text1").split(" ")[2]}{" "}
              {t("fidayPayText.text1").split(" ")[3]}{" "}
              {t("fidayPayText.text1").split(" ")[4]}{" "}
              {t("fidayPayText.text1").split(" ")[5]} <br />
              {t("fidayPayText.text1").split(" ")[6]}
              <span className="text-[#FACD46]">{t("fidayPayText.text2")}</span>,
              <br />
              <span className="text-[#FACD46]">
                {t("fidayPayText.text3")}
              </span>, {t("fidayPayText.text4")}{" "}
              <span className="text-[#FACD46]">{t("fidayPayText.text5")}</span>.
            </h4>
            <button className="text-[#FACD46] hover:text-black hover:bg-[#FACD46] transition du text-xl md:text-2xl border-[3px] px-8 py-3 border-[#FACD46] rounded-full">
              {t("btnText")}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-16 space-y-4 md:space-y-0">
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img className="w-14" src={card} alt="creadit card" />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text6")} <br />
              {t("fidayPayText.text7")}
            </p>
          </div>
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img className="w-14" src={img2} alt="creadit card" />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text8")} <br />
              {t("fidayPayText.text9")}
            </p>
          </div>
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img className="w-14" src={img3} alt="creadit card" />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text10")}
            </p>
          </div>
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img className="w-10" src={img4} alt="creadit card" />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text11")} <br />
              {t("fidayPayText.text12")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FidaPay;
