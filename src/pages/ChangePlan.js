import { Fragment } from "react";
import Card from "../components/Card";
import ChangePlanTable from "../components/ChangePlanTable";

const ChangePlan = () => {
  return (
    <Fragment>
      <Card>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="primary-heading">Change Plan</h1>
          <p className="light-txt t-xsm">Clear All Plans</p>
        </div>
        <ChangePlanTable />
      </Card>
      <div className="mt-5">
        <h1 className="primary-heading">
          <i class="far fa-question-circle green"></i> Need Help
        </h1>
      </div>
      <div>
        <p className="light-txt">
          We’re happy to Help. just email us at{" "}
          <span className="dark-txt">Support@awesomestoreapps.com</span>
        </p>
      </div>
    </Fragment>
  );
};

export default ChangePlan;
