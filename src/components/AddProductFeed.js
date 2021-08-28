import Card from "./Card";

import LightGreyBg from "./LightGreyBg";
import Button from "./Button";
import styles from "./AddProductFeed.module.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const currencyOptions = [
  "PKR (Pakistan)",
  "USD (USA)",
  "EUR (European euro)",
  "CAD (Canada)",
  "AED (UAE dirham)",
];
const defaultCurrencyOption = "Currency: PKR";

const options = ["One", "Two", "Three"];
const defaultOption0 = "Custom Label 0: Product tag (comma separated)";
const defaultOption1 = "Custom Label 1: Collection Ids (comma separated)";
const defaultOption2 = "Custom Label 2: Empty";
const defaultOption3 = "Custom Label 3: Empty";

const AddProductFeed = () => {
  return (
    <Card className="pb-5">
      <h1 className="primary-heading">Add a product feed</h1>
      <div>
        <div className="row mt-5">
          <div className="col-xs-12 col-md-9">
            <form>
              <div className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    className={`form-control ${styles["light-grey-bg"]}`}
                    placeholder="Product Feed Name"
                    aria-label="Product Feed Name"
                  />
                </div>
                <div className="col">
                  <Dropdown
                    controlClassName={`${styles["light-grey-bg"]}`}
                    placeholderClassName={`${styles.currencySelect}`}
                    menuClassName={styles.myMenuClassName}
                    arrowClassName={styles.myArrowClassName}
                    arrowOpen={<span className="arrow-open" />}
                    options={currencyOptions}
                    value={defaultCurrencyOption}
                  />
                </div>
              </div>
              <div className="d-block mt-4">
                <p className={`${styles["txt-md"]} ${styles["txt-dark-1"]}`}>
                  Append currency parameter to product URL?
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioFirst"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className={`form-check-label  ${styles["light-txt"]}`}
                    htmlFor="flexRadioDefault1"
                  >
                    Do Not append. (default, example:
                    my-store.com/products/my-product)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioFirst"
                    id="flexRadioDefault2"
                  />
                  <label
                    className={`form-check-label  ${styles["light-txt"]}`}
                    htmlFor="flexRadioDefault2"
                  >
                    Do append. (example:
                    my-store.com/products/my-product?currency=USD)
                  </label>
                </div>
              </div>
              <div className="d-block mt-4">
                <p className={`${styles["txt-md"]} ${styles["txt-dark-1"]}`}>
                  All products or some of them?
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioSecond"
                    id="flexRadioDefault3"
                    defaultChecked
                  />
                  <label
                    className={`form-check-label  ${styles["light-txt"]}`}
                    htmlFor="flexRadioDefault3"
                  >
                    All products
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioSecond"
                    id="flexRadioDefault4"
                  />
                  <label
                    className={`form-check-label  ${styles["light-txt"]}`}
                    htmlFor="flexRadioDefault4"
                  >
                    Products from selected collection
                  </label>
                </div>
              </div>
              <div className="d-block mt-4">
                <p className={`${styles["txt-md"]} ${styles["txt-dark-1"]}`}>
                  Export mode
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioThird"
                    id="flexRadioDefault5"
                    defaultChecked
                  />
                  <label
                    className={`form-check-label  ${styles["light-txt"]}`}
                    htmlFor="flexRadioDefault5"
                  >
                    Export all variants of a product
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioThird"
                    id="flexRadioDefault6"
                  />
                  <label
                    className={`form-check-label  ${styles["light-txt"]}`}
                    htmlFor="flexRadioDefault6"
                  >
                    Export only one variant of a product
                  </label>
                </div>
              </div>
              <div className="row g-3 mt-4">
                <div className="col mb-3">
                  <Dropdown
                    controlClassName={styles.mySelect}
                    placeholderClassName={`${styles.currencySelect}`}
                    menuClassName={styles.myMenuClassName}
                    arrowClassName={styles.myArrowClassName}
                    arrowOpen={<span className="arrow-open" />}
                    options={options}
                    value={defaultOption0}
                  />
                </div>
                <div className="col mb-3">
                  <Dropdown
                    controlClassName={styles.mySelect}
                    placeholderClassName={`${styles.currencySelect}`}
                    menuClassName={styles.myMenuClassName}
                    arrowClassName={styles.myArrowClassName}
                    arrowOpen={<span className="arrow-open" />}
                    options={options}
                    value={defaultOption1}
                  />
                </div>
              </div>
              <div className="row g-3">
                <div className="col mb-3">
                  <Dropdown
                    controlClassName={styles.mySelect}
                    placeholderClassName={`${styles.currencySelect}`}
                    menuClassName={styles.myMenuClassName}
                    arrowClassName={styles.myArrowClassName}
                    arrowOpen={<span className="arrow-open" />}
                    options={options}
                    value={defaultOption2}
                  />
                </div>
                <div className="col mb-3">
                  <Dropdown
                    controlClassName={styles.mySelect}
                    placeholderClassName={`${styles.currencySelect}`}
                    menuClassName={styles.myMenuClassName}
                    arrowClassName={styles.myArrowClassName}
                    arrowOpen={<span className="arrow-open" />}
                    options={options}
                    value={defaultOption3}
                  />
                </div>
              </div>
              <Button className="bttn" buttonStyle="bttn-outline">
                Add more labels
              </Button>
            </form>
            <div className="my-5">
              <p className={styles["txt-md"]}>
                Featured collection on custom lables
              </p>
              <div className={`px-4 py-5 ${styles["rounded-div"]}`}>
                <div className="d-flex justify-content-evenly flex-wrap">
                  <LightGreyBg className="py-2 px-3 my-3">
                    <p className={`mb-0 ${styles["txt-light"]}`}>
                      1 piece collection (15 products){" "}
                      <i className="fas fa-times-circle"></i>
                    </p>
                    <span></span>
                  </LightGreyBg>

                  <LightGreyBg className="py-2 px-3 my-3">
                    <p className={`mb-0 ${styles["txt-light"]}`}>
                      2 piece collection (6 products){" "}
                      <i className="fas fa-times-circle"></i>
                    </p>
                    <span></span>
                  </LightGreyBg>

                  <LightGreyBg className="py-2 px-3 my-3">
                    <p className={`mb-0 ${styles["txt-light"]}`}>
                      3 piece collection (124 products){" "}
                      <i className="fas fa-times-circle"></i>
                    </p>
                    <span></span>
                  </LightGreyBg>
                  <LightGreyBg className="py-2 px-3 my-3">
                    <p className={`mb-0 ${styles["txt-light"]}`}>
                      3 piece collection - Alphabetically: A-Z (124 products){" "}
                      <i className="fas fa-times-circle"></i>
                    </p>
                    <span></span>
                  </LightGreyBg>

                  <LightGreyBg className="py-2 px-3 my-3">
                    <p className={`mb-0 ${styles["txt-light"]}`}>
                      Sale (215 products){" "}
                      <i className="fas fa-times-circle"></i>
                    </p>
                    <span></span>
                  </LightGreyBg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 d-flex flex-column justify-content-between">
            <Card>
              <LightGreyBg className={`text-center py-4`}>
                <div className="h-main">
                  <h1
                    className={`${styles["txt-dark-1"]} ${styles["secondary-heading"]}`}
                  >
                    <i className={`fas fa-star ${styles.yellow}`}></i> Quick Tip
                    1
                  </h1>
                </div>

                <div className="h-secnd">
                  <p className="light-txt t-xsm">
                    If you can’t see all of your collections
                  </p>
                  <Button className="bttn" buttonStyle="bttn-blue">
                    Refresh them Now
                  </Button>
                  <p className="light-txt t-xsm lh-lg pt-3">
                    Please note this may take a min or two. thanks
                  </p>
                </div>
              </LightGreyBg>
            </Card>
            <Card>
              <LightGreyBg className={`text-center py-4`}>
                <div className="h-main">
                  <h1
                    className={`${styles["txt-dark-1"]} ${styles["secondary-heading"]}`}
                  >
                    <i className={`fas fa-star ${styles.yellow}`}></i> Quick Tip
                    2
                  </h1>
                </div>

                <div className="h-secnd">
                  <p className="light-txt t-xsm lh-lg">
                    Facebook poses a 100 chars limit on the length of custom
                    labels, which mean some custom lables will get truncated.
                    Featured collections allow you to specify collections which
                    will alwate be included in the custom label.
                  </p>
                </div>
              </LightGreyBg>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddProductFeed;
