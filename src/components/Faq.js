import Card from "./Card";
import LightGreyBg from "./LightGreyBg";

const Faq = () => {
  return (
    <Card className="m-10 d-flex f-dir-col justify-content-between">
      <div className="f-main">
        <h1 className="primary-heading dark-txt">FAQ’s</h1>
        <p className="dark-2-txt t-xsm">
          <strong>How often are products and feeds updated?</strong>
        </p>
        <p className="light-txt t-xsm">
          If you are a registered Free user, you can upload up to 3 personal
          icons per collection. If you are a Premium user, you can add up to 256
          personal icons per collection.
        </p>
      </div>
      <LightGreyBg className="p-15">
        <div className="f-secnd d-flex justify-content-around t-xsm">
          <span className="light-txt">
            Can't find an answer to your question?
          </span>
          <span>
            Submit a request <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </LightGreyBg>
    </Card>
  );
};

export default Faq;
