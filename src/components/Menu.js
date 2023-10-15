import React from "react";
import logo from "../assest/logo.png";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const locales = {
    fr: { title: "fr" },
    esp: { title: "sp" },
    en: { title: "eng" },
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-9">
      <div className="flex justify-between items-center">
        <a href="/">
          <img className="w-32" src={logo} alt="logo" />
        </a>
        <div className="space-x-4 md:space-x-6">
          {Object.keys(locales).map((locale) => (
            <button
              key={locale}
              onClick={() => i18n.changeLanguage(locale)}
              className="bg-transparent cursor-pointer text-[#100607] text-[16px]"
            >
              {locales[locale].title}
            </button>
          ))}
          {/* <button className="bg-transparent cursor-pointer text-[#100607] text-[16px]">
            Fr
          </button>
          <button className="bg-transparent cursor-pointer text-[#100607] text-[16px]">
            Sp
          </button>
          <button className="bg-transparent cursor-pointer text-[#100607] text-[16px]">
            Eng
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
