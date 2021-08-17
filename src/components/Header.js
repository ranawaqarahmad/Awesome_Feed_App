import { Button } from "./Button";
import "./Header.css";
import Logo from "./images/logo.png";

const Header = () => {
  return (
    <header className="header m-10">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="logo" />
        <div>
          <h1 className="m-0 t-md t-i">Awesome Feed App</h1>
          <p className="m-0 t-xsm light-txt">by Awesome store</p>
        </div>
      </div>

      <Button className="btn t-xsm" buttonStyle="btn-green" buttonSize="btn-md">
        Change Plan
      </Button>
      <Button
        className="btn t-xsm"
        buttonStyle="btn-light-green"
        buttonSize="btn-lg"
      >
        Add a product feed
      </Button>
      <Button
        className="btn t-xsm"
        buttonStyle="btn-light-green"
        buttonSize="btn-md"
      >
        Edit settings
      </Button>
      <Button
        className="btn t-xsm"
        buttonStyle="btn-light-green"
        buttonSize="btn-lg"
      >
        Update products & feeds
      </Button>
      <Button className="btn t-xsm" buttonStyle="btn-grey" buttonSize="btn-sm">
        Edit Google
      </Button>

      <Button className="btn t-xsm" buttonStyle="btn-white" buttonSize="btn-sm">
        <i className="fas fa-user light-txt"></i> Kamal Ali{" "}
        <i className="fas fa-chevron-down"></i>
      </Button>
    </header>
  );
};

export default Header;
