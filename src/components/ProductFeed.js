import "./ProductFeed.css";
import Card from "./Card";
import LightGreyBg from "./LightGreyBg";
import { Button } from "./Button";
// import Table from "./Table";

const ProductFeed = () => {
  return (
    <Card className="m-10">
      <div className="p-main">
        <h1 className="primary-heading dark-txt">Products Feed</h1>
        <p className="light-txt t-xsm">
          <i className="fas fa-arrow-circle-left"></i> Back to shopify admin
        </p>
      </div>
      {/* <Table /> */}
      <LightGreyBg className="m-tb-30 p-15">
        <div className="p-secnd dark-txt t-sm">
          <span>ID</span>
          <span>Name</span>
          <span>Num</span>
          <span>Status</span>
          <span>Last Refreshed at</span>
          <span>Feed URL</span>
          <span>View Feed</span>
          <span>Edit/Delete</span>
          <span></span>
        </div>
      </LightGreyBg>
      <div className="p-secnd light-txt t-xsm">
        <span>10520</span>
        <span>Product feed (PKR, NL)</span>
        <span>278</span>
        <span>
          OK <i className="fas fa-check-circle green"></i>{" "}
        </span>
        <span>2021-07-06 10:53:34 (3 min ago)</span>
        <span>https://awesoma...</span>
        <span>
          View <i className="fas fa-eye"></i>
        </span>
        <span>
          <i className="fas fa-edit green"></i>{" "}
          <i className="fas fa-trash-alt red"></i>{" "}
        </span>
        <Button
          className="bttn"
          buttonStyle="bttn-light-green"
          buttonSize="bttn-sm"
        >
          Update
        </Button>
      </div>
    </Card>
  );
};

export default ProductFeed;
