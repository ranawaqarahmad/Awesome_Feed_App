import Button from "./Button";
import Card from "./Card";

const WhatNext = () => {
  return (
    <Card className="m-10">
      <div className="d-main">
        <h1 className="primary-heading dark-txt">What to do next</h1>
        <p className="light-txt t-xsm">
          If you don’t have a product catalog, you have to create one:
        </p>
        <Button className="bttn" buttonStyle="bttn-blue" buttonSize="bttn-xlg">
          Create product catalog in business manager
        </Button>
        <p className="light-txt t-xsm lh-lg mt-4">
          Follow the instructions. When asked for a product URL , copy and paste
          the <span className="blue">Feed URL</span> that provided above.
        </p>
        <p className="light-txt t-xsm">Need Help? just email us at</p>
        <p className="dark-txt t-xsm">
          <strong>Support@awesomestoreapps.com</strong>
        </p>
      </div>
    </Card>
  );
};

export default WhatNext;
