import { Fragment } from "react";
import BottomSection from "./BottomSection";
import ProductFeed from "./ProductFeed";

const Home = () => {
  return (
    <Fragment>
      <ProductFeed />
      <BottomSection />
    </Fragment>
  );
};

export default Home;
