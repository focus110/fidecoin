import React, { useState } from "react";
import screen from "../assest/screen.png";
import screen1 from "../assest/screen1.png";
import screen2 from "../assest/screen2.png";
import screen3 from "../assest/screen3.png";
import screen4 from "../assest/screen4.png";
import screen5 from "../assest/screen5.png";
import screen6 from "../assest/screen6.png";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Program = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(1);
  const [currentActive, setCurrentActive] = useState(0);
  const list = [
    {
      title: t("programText.text2"),
      desc: t("programText.text3"),
    },
    {
      title: t("programText.text4"),
      desc: t("programText.text5")},
    {
      title: t("programText.text6"),
      desc: t("programText.text7")},
    {
      title: t("programText.text8"),
      desc: t("programText.text9")},
    {
      title: t("programText.text10"),
      desc: t("programText.text11")},
    {
      title: t("programText.text12"),
      desc: t("programText.text13")},
  ];

  const url = [
    { title: t("programText.text14"), url: screen },
    { title: t("programText.text2") , url: screen1 },
    { title: t("programText.text4"), url: screen2 },
    { title: t("programText.text6"), url: screen3 },
    { title: t("programText.text8"), url: screen4 },
    { title: t("programText.text10"), url: screen5 },
    { title: t("programText.text12"), url: screen6 },
  ];
  return (
    <div>
      <div className="container mb-16">
        <h2 className="text-[#FACD46] text-2xl md:text-4xl mb-8">
        {t("programText.text1")} 
        </h2>
        <div className="flex justify-between md:space-x-12">
          <img
            className="hidden md:block w-[50%] self-center"
            src={url[currentActive].url}
            alt="screen"
          />
          <div className="md:w-[50%] w-full">
            {list.map((index, i) =>
              currentActive === i + 1 ? (
                <div key={i}>
                  <div className="relative h-24 bg-[#FACD46] p-4 rounded-xl flex items-center justify-between mb-2">
                    <p className="absolute bottom-4 left-4 md:text-xl">
                      {index.title}
                    </p>

                    {currentActive === 0 ? (
                      <IoMdAdd
                        onClick={() => setCurrentActive(i + 1)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    ) : (
                      <IoMdRemove
                        onClick={() => setCurrentActive(0)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    )}
                  </div>
                  <div className="relative h-96 md:h-80 border-[2px] rounded-xl border-[#FACD46] mb-2">
                    <p className="absolute bottom-4 right-4 pl-4 text-right text-[#FACD46]">{index.desc}</p>
                  </div>
                </div>
              ) : null
            )}
            {list.map((index, i) =>
              currentActive === 0 ? (
                <div key={i}>
                  <div className="relative h-24 bg-[#FACD46] p-4 rounded-xl flex items-center justify-between mb-2">
                    <p className="absolute bottom-4 left-4 md:text-xl">
                      {index.title}
                    </p>

                    {currentActive === 0 ? (
                      <IoMdAdd
                        onClick={() => setCurrentActive(i + 1)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    ) : (
                      <IoMdRemove
                        onClick={() => setCurrentActive(0)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    )}
                  </div>
                </div>
              ) : null
            )}
            <button className="mt-2 bg-[#FACD46] hover:bg-transparent border-[2px] border-[#FACD46] transition duration-300 hover:text-[#FACD46] text-xl rounded-3xl py-3 px-6 w-full md:w-64">
            {t("btnText")} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
