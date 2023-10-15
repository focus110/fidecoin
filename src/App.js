import "./App.css";
import FidaPay from "./components/FidaPay";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Partnership from "./components/Partnership";
import Program from "./components/Program";
import Slider from "./components/Slider";
import Wallet from "./components/Wallet";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <div className="bg-[#2F2F2F]">
      <Slider />
      <Introduction />
      <FidaPay />
      <hr className="container border-[1px] border-[#FACD46] mb-16" />
      <Wallet />
      <hr className="container border-[1px] border-[#FACD46] mb-16" />
      <Whatsapp />
      <hr className="container border-[1px] border-[#FACD46] mb-16" />
      <Program />
      <Partnership />
      <Footer />
    </div>
  );
}

export default App;
