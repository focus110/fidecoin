import React, { useState } from "react";
import mobileDevice from "../assest/mobiles.png";
import blank_screen from "../assest/blank_screen.png";
import transaction from "../assest/transaction.png";
import bellIcon from "../assest/icon_bell.png";
import samsung from "../assest/samsung.png";
import apple from "../assest/apple.png";
import google from "../assest/google.png";
import { useTranslation } from "react-i18next";

const Wallet = () => {
  const { t, i18n } = useTranslation();
  const [currentActive, setCurrentActive] = useState(0);

  const cardsInfo = [
    { title: t("walletText.text2"), img: blank_screen },
    { title: t("walletText.text3"), img: transaction },
    { title: t("walletText.text4"), img: blank_screen },
    { title: t("walletText.text5"), img: blank_screen },
    { title: t("walletText.text6"), img: blank_screen },
    { title: t("walletText.text7"), img: blank_screen },
  ];

  return (
    <div>
      <div className="container pt-8">
        <h2 className="text-xl md:text-2xl text-[#FACD46] mb-4">
        {t("walletText.text1")}
        </h2>
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <div className="w-full md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {cardsInfo.map((index, i) => (
              <div
                onClick={() => setCurrentActive(i + 1)}
                key={i}
                className={`${
                  currentActive === i + 1
                    ? `bg-transparent text-[#FACD46]  transition duration-300`
                    : `bg-[#FACD46] text-[#373737] transition duration-300`
                } relative cursor-pointer border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4`}
              >
                <img className="w-8" src={bellIcon} alt="creadit card" />
                <p className="absolute bottom-4 right-4 text-right text-xl pl-16">
                  {index.title}
                </p>
              </div>
            ))}
          </div>
          <div className="relative md:w-[40%]">
            <p className="absolute top-[40%] left-[10%] text-xl md:text-2xl text-white w-36 text transition duration-300">
              {currentActive === 0 ? null : cardsInfo[currentActive - 1].title}
            </p>
            <img
              className=""
              src={
                currentActive === 0
                  ? mobileDevice
                  : cardsInfo[currentActive - 1].img
              }
              alt="mobile phone"
            />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-16">
          <div className="bg-black p-1 md:p-1.5 rounded-full">
            <img className="w-20 md:w-36" src={samsung} alt="mobile phone" />
          </div>
          <img className="w-20 md:w-36" src={apple} alt="mobile phone" />
          <img className="w-20 md:w-36" src={google} alt="mobile phone" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
