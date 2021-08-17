import Faq from "./Faq";
import Hwta from "./Hwta";
import Wtdn from "./Wtdn";
import "./BottomSection.css";
const BottomSection = () => {
  return (
    <div className="bottom-section m-tb-30">
      <Wtdn />
      <Faq />
      <Hwta />
    </div>
  );
};

export default BottomSection;
