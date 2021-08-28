import { useHistory } from "react-router-dom";
import Button from "./Button";
import "./Header.css";
import Logo from "./assets/images/logo.png";

const Header = (props) => {
  const history = useHistory();

  const changePlanHandler = () => {
    history.push("/change-plan");
  };
  const addProductFeedHandler = () => {
    history.push("/add-product-feed");
  };
  const editSettingsHandler = () => {
    history.push("/edit-settings");
  };
  const updateProductFeedsHandler = () => {
    history.push("/update-product-feeds");
  };

  return (
    <header className="header m-10">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="logo" />
        <div>
          <h1 className="m-0 t-md txt-italic">Awesome Feed App</h1>
          <p className="m-0 t-xsm light-txt">by Awesome store</p>
        </div>
      </div>
      {/* <button onClick={changePlanHandler}>Change</button> */}

      <div className="bttn-container">
        <Button
          onClick={changePlanHandler}
          className="bttn t-xsm"
          buttonStyle="bttn-light-green"
          buttonSize="bttn-md"
        >
          Change Plan
        </Button>
        <Button
          onClick={addProductFeedHandler}
          className="bttn t-xsm"
          buttonStyle="bttn-light-green"
          buttonSize="bttn-lg"
        >
          Add a product feed
        </Button>
        <Button
          onClick={editSettingsHandler}
          className="bttn t-xsm"
          buttonStyle="bttn-light-green"
          buttonSize="bttn-md"
        >
          Edit settings
        </Button>
        <Button
          onClick={updateProductFeedsHandler}
          className="bttn t-xsm"
          buttonStyle="bttn-light-green"
          buttonSize="bttn-lg"
        >
          Update products & feeds
        </Button>
        <Button
          disabled={true}
          className="bttn t-xsm"
          buttonStyle="bttn-grey"
          buttonSize="bttn-sm"
        >
          Edit Google
        </Button>

        <Button
          className="bttn t-xsm"
          buttonStyle="bttn-white"
          buttonSize="bttn-sm"
        >
          <i className="fas fa-user light-txt"></i> Kamal Ali{" "}
          <i className="fas fa-chevron-down"></i>
        </Button>
      </div>
    </header>
  );
};

export default Header;
