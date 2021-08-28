import Button from "./Button";

const ChangePlanTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-borderless mt-5">
        <thead>
          <tr className="light-grey-bg dark-2-txt t-sm">
            <td>Plan</td>
            <td>Price</td>
            <td>Max Products</td>
            <td>Resize Image</td>
            <td>Subscribe</td>
          </tr>
        </thead>
        <tbody>
          <tr className="light-txt t-xsm">
            <td>Small</td>
            <td>$14</td>
            <td>500 Products</td>
            <td>
              <i className="fas fa-times-circle red"></i>
            </td>
            <td>
              <Button
                className="bttn"
                buttonStyle="bttn-light-green"
                buttonSize="bttn-sub"
              >
                Subscribe Now
              </Button>
            </td>
          </tr>
          <tr className="light-txt t-xsm">
            <td>Medium</td>
            <td>$24</td>
            <td>2000 Products</td>
            <td>
              <i className="fas fa-times-circle red"></i>
            </td>
            <td>
              <Button
                disabled="disabled"
                className="bttn"
                buttonStyle="bttn-light-green"
                buttonSize="bttn-sub"
              >
                Subscribed
              </Button>
            </td>
          </tr>
          <tr className="light-txt t-xsm">
            <td>Large</td>
            <td>$34</td>
            <td>Unlimited Products</td>
            <td>
              <i className="fas fa-check-circle green"></i>
            </td>
            <td>
              <Button
                className="bttn"
                buttonStyle="bttn-light-green"
                buttonSize="bttn-sub"
              >
                Subscribe Now
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChangePlanTable;
