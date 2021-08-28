import Button from "./Button";

const ProductFeedTable = () => {
  return (
    <div className=" table-responsive">
      <table className="table table-borderless mt-5">
        <thead>
          <tr className="light-grey-bg dark-2-txt t-sm">
            <td>ID</td>
            <td>Name</td>
            <td>Num</td>
            <td>Status</td>
            <td>Last Refreshed at</td>
            <td>Feed URL</td>
            <td>View Feed</td>
            <td>Edit/Delete</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr className="light-txt t-xsm">
            <td>10520</td>
            <td>Product feed (PKR, NL)</td>
            <td>278</td>
            <td>
              OK <i className="fas fa-check-circle green"></i>
            </td>
            <td>2021-07-06 10:53:34 (3 min ago)</td>
            <td>https://awesoma...</td>
            <td>
              View <i className="fas fa-eye"></i>
            </td>
            <td>
              <i className="fas fa-edit green"></i>{" "}
              <i className="fas fa-trash-alt red"></i>{" "}
            </td>
            <td>
              {" "}
              <Button
                className="bttn"
                buttonStyle="bttn-light-green"
                buttonSize="bttn-sm"
              >
                Update
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductFeedTable;
