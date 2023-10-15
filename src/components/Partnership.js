import React from "react";
import ingenico from "../assest/ingenico.png";
import sunmi from "../assest/sunmi_pos.png";
import pax from "../assest/pax.png";
import castles from "../assest/castles.png";
import softPos from "../assest/softPos.png";

const Partnership = () => {
  return (
    <div className="bg-white py-4">
      <div className="container">
        <div className="flex justify-center items-center space-x-4 md:space-x-12">
          <img className="w-11 md:w-24" src={ingenico} alt="ingenico" />
          <img className="w-11 md:w-24" src={sunmi} alt="sunmi" />
          <img className="w-11 md:w-24" src={pax} alt="pax" />
          <img className="w-11 md:w-24" src={castles} alt="ingenico" />
          <img className="w-11 md:w-24" src={softPos} alt="ingenico" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
