import { Fragment } from "react";
import BottomSection from "../components/BottomSection";
import ProductFeed from "../components/ProductFeed";

const Home = () => {
  return (
    <Fragment>
      <ProductFeed />
      <BottomSection />
    </Fragment>
  );
};

export default Home;
