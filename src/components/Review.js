import { Button } from "./Button";
import Card from "./Card";
import LightGreyBg from "./LightGreyBg";
import ImgStar from "./assets/images/stars.png";
const Review = () => {
  return (
    <Card className="m-10 txt-center">
      <LightGreyBg className="p-45">
        <div className="h-main">
          <h1 className="dark-txt primary-heading">Happy with the app?</h1>
          <img src={ImgStar} alt="star" />
        </div>

        <div className="h-secnd">
          <p className="light-txt t-xsm">
            We’ll appreciate if you could leave a{" "}
            <strong className="dark-txt"> short review </strong> that help us
            building new and better features instead of marketing.
          </p>
        </div>
      </LightGreyBg>

      <Button
        customClass="m-t--10"
        className="bttn"
        buttonStyle="bttn-light-green"
        buttonSize="bttn-xlg"
      >
        Leave a review
      </Button>
    </Card>
  );
};

export default Review;
