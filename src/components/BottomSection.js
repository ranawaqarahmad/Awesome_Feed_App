import Faq from "./Faq";
import Review from "./Review";
import WhatNext from "./WhatNext";
import "./BottomSection.css";

const BottomSection = () => {
  return (
    <div className="bottom-section m-tb-30">
      <WhatNext />
      <Faq />
      <Review />
    </div>
  );
};

export default BottomSection;
