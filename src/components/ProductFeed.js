import "./ProductFeed.css";
import Card from "./Card";
import ProductFeedTable from "./ProductFeedTable";

const ProductFeed = () => {
  return (
    <Card className="m-10">
      <div className="p-main">
        <h1 className="primary-heading dark-txt">Products Feed</h1>
        <p className="light-txt t-xsm">
          <i className="fas fa-arrow-circle-left"></i> Back to shopify admin
        </p>
      </div>
      <ProductFeedTable />
    </Card>
  );
};

export default ProductFeed;
